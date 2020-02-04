import { Component, HostListener, OnDestroy } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router'
import { PostService } from 'src/app/posts/classes/post.service'

@Component({
    selector: 'tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnDestroy {

    userId: number

    posts: any[]
    navigationSubscription: any

    scrollRows: number

    headers: string[] = ['Id', 'Title', 'Views']
    widths: string[] = ['0px', '400px', '150px']
    visibility: string[] = ['none', '', '']
    justify: string[] = ['center', 'left', 'right']

    currentTableRow: number = 0
    info: any
    moreInfo: string = ''
    containerTop = 0

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
        this.activatedRoute.params.subscribe((params: Params) => { this.userId = +params['userId'] })
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.postService.getPosts(this.userId).subscribe(
                    result => {
                        console.log('came back from the service')
                        this.posts = result
                        this.doAsync().then((response) => {
                            console.log('doAsync', response)
                            this.doAnotherAsync().then((response) => {
                                console.log('doAnotherAsync', response)
                                this.doMoreAsync().then((response) => {
                                    console.log('doMoreAsync', response)
                                })
                            })
                        },
                            (error: Response) => {
                                if (error.status == 404) {
                                    alert('This record has been deleted')
                                } else {
                                    alert('An error occured')
                                }
                            })
                    })
            }
        })
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.gotoNewPosition('1')
        }, 1000)
    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { key: string }) {
        console.log('Inside table')
        this.gotoNewPosition(event.key)
    }

    private gotoNewPosition(position: string) {
        const table = (<HTMLTableElement>document.getElementById('table-a'))
        // If a row is clicked (position = row.id)
        if (!isNaN(parseInt(position))) {
            this.clearHighlight(table)
            this.highlightLine(table, position)
            this.displayInfo(table.rows[this.currentTableRow])
        }
        if (position == 'ArrowUp' && this.currentTableRow > 1) {
            this.clearHighlight(table)
            this.highlightLine(table, 'up')
            if (!this.isScrolledIntoView(table.rows[this.currentTableRow])) {
                document.getElementById(this.currentTableRow.toString()).scrollIntoView()
                const container = (<HTMLTableElement>document.getElementById('container-a'))
                var docViewTop = container.scrollTop
                var elemTop = table.rows[this.currentTableRow].offsetTop
                if (elemTop <= docViewTop) {
                    this.moreInfo = 'Must scroll down by ' + (this.currentTableRow - 1) * 25
                    container.scrollTop = (this.currentTableRow - 1) * 25
                }
            }
        }
        if (position == 'ArrowDown' && this.currentTableRow < table.rows.length - 1) {
            this.clearHighlight(table)
            this.highlightLine(table, 'down')
            if (!this.isScrolledIntoView(table.rows[this.currentTableRow])) {
                document.getElementById(this.currentTableRow.toString()).scrollIntoView(false)
            }
        }
        this.info = this.currentTableRow
    }

    private highlightLine(table: HTMLTableElement, direction: any) {
        // If a row is clicked (direction = row.id)
        if (!isNaN(direction)) {
            this.currentTableRow = parseInt(direction)
        } else {
            if (direction == 'up')--this.currentTableRow
            if (direction == 'down')++this.currentTableRow
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
        })
    }

    private isScrolledIntoView(el: HTMLTableRowElement) {
        const container = (<HTMLTableElement>document.getElementById('container-a'))
        var docViewTop = container.scrollTop // console.log('') console.log('docViewTop', docViewTop)
        var docViewBottom = docViewTop + document.getElementById('container-a').offsetHeight // console.log('docViewBottom', docViewBottom)
        var elemTop = el.offsetTop // console.log('elemTop', elemTop)
        var elemBottom = elemTop + el.offsetHeight // console.log('elemBottom', elemBottom)
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
    }

    private displayInfo(el: HTMLTableRowElement) {
        const container = (<HTMLTableElement>document.getElementById('container-a'))
        var docViewTop = container.scrollTop // console.log('') console.log('docViewTop', docViewTop)
        var docViewBottom = docViewTop + document.getElementById('container-a').offsetHeight // console.log('docViewBottom', docViewBottom)
        var elemTop = el.offsetTop // console.log('elemTop', elemTop)
        var elemBottom = elemTop + el.offsetHeight // console.log('elemBottom', elemBottom)
    }

    doAsync() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('#1 finished')
            }, 1000);
        })
        return promise
    }

    doAnotherAsync() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('#2 finished')
            }, 5000);
        })
    }

    doMoreAsync() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(45)
            }, 2000);
        })
        return promise
    }

}
