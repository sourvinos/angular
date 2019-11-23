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
            this.gotoNewPosition('ArrowDown')
        }, 500);
    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { key: string; }) {
        this.gotoNewPosition(event.key)
    }

    private gotoNewPosition(direction: string) {
        const table = (<HTMLTableElement>document.getElementById('myTable'))
        console.log('Rows including header', table.rows.length, ' Current row', this.currentTableRow, ' Asked new direction', direction)
        if (parseInt(direction)) {
            this.clearHighlight(table)
            this.highlightLine(table, direction)
        }
        if (direction == 'ArrowDown' && this.currentTableRow < table.rows.length - 1) {
            this.clearHighlight(table)
            this.highlightLine(table, 'down')
        }
        if (direction == 'ArrowUp' && this.currentTableRow > 1) {
            this.clearHighlight(table)
            this.highlightLine(table, 'up')
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

    scroll() {
        const container = (<HTMLTableElement>document.getElementById('container'))
        container.scrollTop = 100
    }

}
