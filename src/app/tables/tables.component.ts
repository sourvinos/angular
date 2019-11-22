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
    currentTableRow: number = 1

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
            this.getInfo(0)
        }, 500);
    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { key: string; }) {
        if (event.key == 'ArrowDown') {
            this.removeSelected()
            this.getInfo(this.currentTableRow++)
        }
        if (event.key == 'ArrowUp') {
            this.removeSelected()
            this.getInfo(this.currentTableRow--)
        }

        // let id = document.querySelector('tr')
        // console.log('Id', id)
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe()
        }
    }

    getInfo(rowIndex: number) {
        const table = (<HTMLTableElement>document.getElementById('myTable'))
        console.log('Rows', table.rows.length, ' Selected row index', rowIndex)
        rowIndex++
        console.log('New row index', rowIndex)
        if (rowIndex < table.rows.length) {
            table.rows[rowIndex].classList.toggle('selected')
        } else {
            console.log('Out of limit. rowindex', rowIndex)
            rowIndex = 1
            this.currentTableRow = 0
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
