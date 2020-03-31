import { IndexInteractionService } from './../../services/interaction.service'
import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router'
import { IPost } from '../classes/model.post'
import { PostService } from '../classes/post.service'
import { MatDialog } from '@angular/material'
import { IndexDialogComponent } from 'src/app/shared/index-dialog/index-dialog.component'
import { KeyboardShortcuts, Unlisten } from 'src/app/services/keyboard-shortcuts.service'

@Component({
    selector: 'list-post',
    templateUrl: './list-post.html',
    styleUrls: ['./list-post.css']
})

export class PostListComponent implements OnInit, AfterViewInit, OnDestroy {

    userId: number
    posts: IPost[]
    navigationSubscription: any
    errorMessage: string = ''

    headers = ['Id', 'UserId', 'Title']
    widths = ['', '30%', '70%']
    visibility = ['none', '', '']
    justify = ['center', 'left', 'left']
    fields = ['id', 'userId', 'title']

    unlisten: Unlisten

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService, public dialog: MatDialog, private _interactionService: IndexInteractionService, private keyboardShortcutsService: KeyboardShortcuts) {
        this.activatedRoute.params.subscribe((params: Params) => { this.userId = +params['userId'] })
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                console.log('constructor navigation end')
                this.posts = this.activatedRoute.snapshot.data['postList']
            }
        })
    }

    ngOnInit() {
        this.addShortcuts()
    }

    ngAfterViewInit() {
        this.changeColors()
    }

    ngOnDestroy() {
        this.unlisten()
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe()
        }
    }

    changeColors() {
        const elements = document.querySelectorAll('li')
        console.log('changing colors', elements.length)
        elements.forEach(element => {
            element.style.color = 'green'
        })
    }

    // T
    getPost(postId: number) {
        this.router.navigate(['post/', postId], {
            relativeTo: this.activatedRoute
        })
    }

    // T
    lookupIndex(
        lookupArray: any[],
        title: string,
        fields: any[],
        headers: any[],
        widths: any[],
        visibility: any[],
        justify: any[],
        value: string) {
        const filteredArray = []
        console.log('value', value + ' lookupArray', lookupArray)
        lookupArray.filter(x => {
            if (x.title.toUpperCase().includes(value.toUpperCase())) {
                filteredArray.push(x)
            }
        })
        if (filteredArray.length > 0) {
            this.showModalIndex(filteredArray, title, fields, headers, widths, visibility, justify)
        }
    }

    private showModalIndex(
        elements: any,
        title: string,
        fields: any[],
        headers: any[],
        widths: any[],
        visibility: any[],
        justify: any[]) {
        const dialog = this.dialog.open(IndexDialogComponent, {
            height: '644px',
            width: '600px',
            data: {
                records: elements,
                title: title,
                fields: fields,
                headers: headers,
                widths: widths,
                visibility: visibility,
                justify: justify
            }
        })
        dialog.afterClosed().subscribe(result => {
            dialog.afterClosed().subscribe((x) => {
                console.log(x)
            })
        })
    }

    private addShortcuts() {
        this.unlisten = this.keyboardShortcutsService.listen({
            'Escape': (event: KeyboardEvent): void => {
                if (document.getElementsByClassName('cdk-overlay-pane').length === 0) {
                    alert('List, going back')
                    this.goBack()
                }
            }
        }, {
            priority: 2,
            inputs: true
        })
    }

    private goBack(): void {
        this.router.navigate(['/posts'])
    }

}
