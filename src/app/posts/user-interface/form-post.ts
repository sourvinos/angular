import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IPost } from '../classes/model.post';
import { PostService } from '../classes/service.post';
import { PostModalForm } from './modal-form';

@Component({
    selector: 'form-post',
    templateUrl: 'form-post.html',
    styleUrls: ['./form-post.css']
})

export class PostFormComponent {

    postId: number

    post: IPost

    constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private postService: PostService, public dialog: MatDialog) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.getPost(params)
        })
    }

    // T
    goBack() {
        this.router.navigate(['../../'], {
            relativeTo: this.activatedRoute
        })
    }

    // T
    save(object: IPost) {
        this.postService.updatePost(this.postId, object).subscribe(() => {
            this.router.navigate(['../../'], {
                relativeTo: this.activatedRoute
            })
        })
    }

    private getPost(params: { [x: string]: any; }) {
        this.postService.getPost(params['postId']).subscribe(result => {
            this.post = result[0]
            const dialogRef = this.dialog.open(PostModalForm, {
                width: '250px',
                data: { post: this.post },
                closeOnNavigation: false
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.save(result)
                } else {
                    this.router.navigate(['../../'], {
                        relativeTo: this.activatedRoute
                    })
                }
            });
        })
    }

}
