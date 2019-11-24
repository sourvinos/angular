import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { PostService } from '../posts/classes/service.post';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnDestroy {

    userId: number = 1
    posts: any[]
    navigationSubscription: any

    offset: number

    headers: string[] = ['Id', 'Title', 'Views']
    widths: string[] = ['0px', '400px', '150px']
    visibility: string[] = ['none', '', '']
    justify: string[] = ['center', 'left', 'right']

    currentTableRow: number = 0
    info: any
    moreInfo: string = ''
    containerHeight = 0
    containerTop = 0
    table: HTMLTableElement

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
        this.activatedRoute.params.subscribe((params: Params) => { this.userId = +params['userId'] })
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.postService.getPosts(this.userId).subscribe(result => {
                    this.posts = result.map(product => {
                        return {
                            id: product.id,
                            title: product.title,
                            views: product.views
                        }
                    })
                })
            }
        })
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.containerHeight = document.getElementById('container').offsetHeight
            this.gotoNewPosition('1')
            // console.log('Offset height', this.containerHeight)
            // console.log('Client height', document.getElementById('container').clientHeight)
            // console.log('Scroll height', document.getElementById('container').scrollHeight)
        }, 500);
    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { key: string; }) {
        this.gotoNewPosition(event.key)
    }

    private gotoNewPosition(position: any) {
        const table = (<HTMLTableElement>document.getElementById('myTable'))
        console.log(position)
        if (!isNaN(position)) {
            console.log('Highlight')
            this.clearHighlight(table)
            this.highlightLine(table, position)
            document.getElementById(position.toString()).scrollIntoView()
        }
        if (position == 'ArrowUp' && this.currentTableRow > 1) {
            this.clearHighlight(table)
            this.highlightLine(table, 'up')
            console.log(table.rows[this.currentTableRow])
            this.info = this.isScrolledIntoView(table.rows[this.currentTableRow])
            if (!this.isScrolledIntoView(table.rows[this.currentTableRow])) {
                document.getElementById(this.currentTableRow.toString()).scrollIntoView()
            }
        }
        if (position == 'ArrowDown' && this.currentTableRow < table.rows.length - 1) {
            this.clearHighlight(table)
            this.highlightLine(table, 'down')
            console.log(table.rows[this.currentTableRow])
            this.info = this.isScrolledIntoView(table.rows[this.currentTableRow])
            if (!this.isScrolledIntoView(table.rows[this.currentTableRow])) {
                document.getElementById(this.currentTableRow.toString()).scrollIntoView()
            }
        }
    }

    private scrollList(direction: string) { }

    private highlightLine(table: HTMLTableElement, direction: any) {
        console.log('Highlighting line', direction)
        if (direction == 'up' || direction == 'down') {
            this.currentTableRow = direction == 'up' ? --this.currentTableRow : ++this.currentTableRow
        } else {
            console.log('Direction', parseInt(direction))
            this.currentTableRow = parseInt(direction)
        }
        table.rows[this.currentTableRow].classList.toggle('selected')
    }

    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe()
        }
    }

    clearHighlight(table: HTMLTableElement) {
        const rows = table.querySelectorAll('tr')
        rows.forEach(element => {
            element.classList.remove('selected')
        });
    }

    scroll(pixels: number) {
        console.log('Scrolling to', pixels)
        let element = document.getElementById('container')
        element.scrollTop = pixels
    }

    private isScrolledIntoView(el: HTMLTableRowElement) {

        const container = (<HTMLTableElement>document.getElementById('container'))

        var docViewTop = container.scrollTop; console.log('docViewTop', docViewTop)
        var docViewBottom = docViewTop + document.getElementById('container').offsetHeight; console.log('docViewBottom', docViewBottom)

        var elemTop = el.offsetTop; console.log('elemTop', elemTop)
        var elemBottom = elemTop + el.offsetHeight; console.log('elemBottom', elemBottom)

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
}
