import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { KeyboardShortcuts, Unlisten } from 'src/app/services/keyboard-shortcuts.service'

@Component({
    selector: 'wrapper-post',
    templateUrl: './wrapper-post.html',
    styleUrls: ['./wrapper-post.css']
})

export class PostWrapperComponent implements OnInit, AfterViewInit, OnDestroy {

    userId: number

    // 'italic' is used in the template for class binding
    // 'special' is the name of the class in the css
    special: string = 'special'

    // isItalic is used in the template for class binding

    isItalic: boolean = true

    unlisten: Unlisten

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private keyboardShortcutsService: KeyboardShortcuts) { }

    ngOnInit() {
        this.addShortcuts()
    }

    ngAfterViewInit() { }

    ngOnDestroy() {
        this.unlisten()
    }

    loadPosts(userId: number) {
        this.router.navigate(['userId/', userId], {
            relativeTo: this.activatedRoute
        })
    }

    private addShortcuts() {
        this.unlisten = this.keyboardShortcutsService.listen({
            'Escape': (event: KeyboardEvent): void => {
                if (document.getElementsByClassName('cdk-overlay-pane').length === 0) {
                    alert('Wrapper, going back')
                    this.goBack()
                }
            }
        }, {
            priority: 1,
            inputs: true
        })
    }

    private goBack(): void {
        this.router.navigate(['/'])
    }

}
