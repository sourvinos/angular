import { ModalDialogComponent } from './../../modal-dialog/modal-dialog.component';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IPost } from '../classes/model.post';
import { PostService } from '../classes/service.post';
import { PostModalForm } from './modal-form';
import { Subject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap';
import { MaterialDialogComponent } from 'src/app/material-dialog/material-dialog.component';

@Component({
    selector: 'form-post',
    templateUrl: 'form-post.html',
    styleUrls: ['./form-post.css']
})

export class PostFormComponent {

    postId: number
    post: IPost

    form = this.formBuilder.group({
        id: 0,
        userId: 0,
        title: ['', [Validators.required, Validators.maxLength(100)]],
        body: ['', [Validators.maxLength(255)]]
    })

    constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private postService: PostService, public dialog: MatDialog, private modalService: BsModalService) {
        this.activatedRoute.params.subscribe(p => {
            this.updatePostId(p)
            this.getPost()
        })
    }

    ngOnInit() {
        console.log('Init', this.postId)

    }

    // Master
    canDeactivate() {
        if (this.form.dirty) {
            const dialogRef = this.dialog.open(MaterialDialogComponent, {
                height: '250px',
                width: '550px',
                data: {
                    title: 'Please confirm',
                    message: 'If you continue, changes in this record will be lost!',
                    actions: ['cancel', 'ok']
                },
                panelClass: 'dialog'
            })
            return dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed', result);
                if (result == 'CloseMe') {
                    this.form.reset()
                    this.router.navigate(['../../'], { relativeTo: this.activatedRoute })
                }
            });
        } else {
            return true
        }
    }

    // Master with bootstrap
    canDeactivates() {
        if (this.form.dirty) {
            const subject = new Subject<boolean>()
            const modal = this.modalService.show(ModalDialogComponent, {
                initialState: {
                    title: 'Confirmation',
                    message: 'If you continue, all changes in this record will be lost.',
                    type: 'question'
                }, animated: false
            })
            modal.content.subject = subject
            return subject.asObservable()
        } else {
            return true
        }
    }

    // T
    close() {
        // this.router.navigate(['/'])
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute })
    }

    // T
    updatePost() {
        console.log('Saving', this.form.value)
        this.postService.updatePost(this.form.value).subscribe(result => {
            console.log('After the update', result)
            this.form.reset()
            this.router.navigate(['../../'], {
                relativeTo: this.activatedRoute
            })
        })
    }

    private updatePostId(p: { [x: string]: any; }) {
        this.postId = p['postId']
    }

    private getPost() {
        console.log('Getting post', this.postId)
        if (this.postId) {
            this.postService.getPost(this.postId).subscribe(result => {
                this.post = result[0]
                this.populateFields(this.post)
            }, error => {
                console.log('Error getting record')
            })
        }

    }

    private populateFields(result: IPost) {
        console.log('Will populate fields with', result)
        // this.openDialog()
        // document.getElementById('list').style.marginTop = "-273px"
        this.form.setValue({
            id: result.id,
            userId: result.userId,
            title: result.title,
            body: result.body
        })
    }

    private openDialog(): void {
        const dialogRef = this.dialog.open(PostModalForm, {
            width: '250px',
            data: { post: this.post },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }


}
