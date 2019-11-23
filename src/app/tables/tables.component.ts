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

    headers: string[] = ['Id', 'Title', 'Views']
    widths: string[] = ['0px', '400px', '150px']
    visibility: string[] = ['none', '', '']
    justify: string[] = ['center', 'left', 'right']

    keyPressed: string
    currentTableRow: number = 0

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
            this.getInfo('Down')
        }, 500);
    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { key: string; }) {
        if (event.key == 'ArrowDown') {
            this.getInfo('Down')
        }
        if (event.key == 'ArrowUp') {
            this.getInfo('Up')
        }
    }

    getInfo(direction: string) {
        const table = (<HTMLTableElement>document.getElementById('myTable'))
        console.log('Rows including header', table.rows.length, ' Current row', this.currentTableRow, ' Asked new direction', direction)
        if (direction == 'Down' && this.currentTableRow < table.rows.length - 1) {
            console.log('Doing something')
            this.removeSelected()
            ++this.currentTableRow
            table.rows[this.currentTableRow].classList.toggle('selected')
            console.log('Current row', this.currentTableRow)
        }
        if (direction == 'Up' && this.currentTableRow > 1) {
            console.log('Doing something')
            this.removeSelected()
            --this.currentTableRow
            table.rows[this.currentTableRow].classList.toggle('selected')
            console.log('Current row', this.currentTableRow)
        }

        // if (askedNewRow < table.rows.length && askedNewRow > 0) {
        //     this.currentTableRow = askedNewRow
        //     table.rows[askedNewRow].classList.toggle('selected')
        // } else {
        //     table.rows[this.currentTableRow].classList.toggle('selected')
        // }
        // } else {
        //     console.log('Out of limit. Resetting. Impossible new row', rowIndex)
        //     this.currentTableRow = 1
        //     rowIndex = 1
        //     console.log('Rows including header', table.rows.length, ' Current row', this.currentTableRow, ' Asked new row', rowIndex)
        //     table.rows[rowIndex].classList.toggle('selected')
        // }
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe()
        }
    }

    removeSelected() {
        const table = (<HTMLTableElement>document.getElementById('myTable'))
        const rows = table.querySelectorAll('tr')
        rows.forEach(element => {
            element.classList.remove('selected')
        });
        console.log('All clean')
    }

    scroll() {
        const container = (<HTMLTableElement>document.getElementById('container'))
        container.scrollTop = 100
    }

}
