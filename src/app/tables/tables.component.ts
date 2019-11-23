import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { PostService } from '../posts/classes/service.post';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit, OnDestroy {

    userId: number = 1
    posts: any[]
    navigationSubscription: any

    offset: number

    headers: string[] = ['Id', 'Title', 'Views']
    widths: string[] = ['0px', '400px', '150px']
    visibility: string[] = ['none', '', '']
    justify: string[] = ['center', 'left', 'right']

    currentTableRow: number = 0
    info: string = ''
    moreInfo: string = ''

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
            this.gotoNewPosition('ArrowDown')
            console.log('Offset height', document.getElementById('container').offsetHeight)
            console.log('Client height', document.getElementById('container').clientHeight)
            console.log('Scroll height', document.getElementById('container').scrollHeight)
        }, 500);
    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { key: string; }) {
        this.gotoNewPosition(event.key)
    }

    private gotoNewPosition(direction: string) {
        const table = (<HTMLTableElement>document.getElementById('myTable'))
        if (parseInt(direction)) {
            this.clearHighlight(table)
            this.highlightLine(table, direction)
        }
        if (direction == 'ArrowDown' && this.currentTableRow < table.rows.length - 1) {
            this.clearHighlight(table)
            this.highlightLine(table, 'down')
            this.scrollList(direction)
        }
        if (direction == 'ArrowUp' && this.currentTableRow > 1) {
            this.clearHighlight(table)
            this.highlightLine(table, 'up')
            this.scrollList(direction)
        }
    }

    private scrollList(direction: string) {
        let containerHeight = document.getElementById('container').offsetHeight
        let containerTop = document.getElementById('container').offsetTop
        let selectedRow = <HTMLTableRowElement>document.getElementsByClassName('selected')[0]
        let rowTopBorder = selectedRow.offsetTop
        let rowBottomBorder = selectedRow.offsetTop + selectedRow.scrollHeight
        if (direction == 'ArrowUp') {
            if (!this.isScrolledIntoView(selectedRow)) {
                console.log('Must scroll up')
            }
        }
        if (direction == 'ArrowDown') {
            if (!this.isScrolledIntoView(selectedRow)) {
                console.log('Must scroll down')
            }
        }
    }

    private highlightLine(table: HTMLTableElement, direction: any) {
        if (direction == 'up' || direction == 'down') {
            this.currentTableRow = direction == 'up' ? --this.currentTableRow : ++this.currentTableRow
        } else {
            this.currentTableRow = direction
        }
        table.rows[this.currentTableRow].classList.toggle('selected')
    }

    ngOnInit() {
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
        var rect = el.getBoundingClientRect();

        return (rect.top >= 0) && (rect.bottom <= window.innerHeight);
    }

}
