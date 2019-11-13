import { Component, DoCheck } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, NavigationStart, NavigationError, NavigationCancel, NavigationEnd } from '@angular/router';
import { PostService } from '../classes/post.service';
import { IPost } from '../classes/post.model';

@Component({
    selector: 'form-post',
    templateUrl: './form-post.html',
    styleUrls: ['./form-post.css']
})

export class FormPostComponent implements DoCheck {

    postId: number
    currentPostId: number

    post: IPost

    form = this.formBuilder.group({
        id: 0,
        userId: 0,
        title: ['', [Validators.required, Validators.maxLength(100)]],
        body: ['', [Validators.maxLength(100)]]
    })

    constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private postService: PostService) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.postId = params['postId']
        })
    }

    ngDoCheck() {
        if (this.currentPostId != this.postId) {
            this.currentPostId = this.postId
            this.populateFields()
        }
    }

    private populateFields() {
        if (this.postId) {
            this.post = this.activatedRoute.snapshot.data['postEdit'][0]
            this.form.setValue({
                id: this.post.id,
                userId: this.post.userId,
                title: this.post.title,
                body: this.post.body
            })
        }
    }

    goBack() {
        this.router.navigate(['../../'], {
            relativeTo: this.activatedRoute
        })
    }

    save() {
        this.postService.updatePost(this.postId, this.form.value).subscribe(() => {
            this.router.navigate(['../../'], {
                relativeTo: this.activatedRoute
            })
        })
    }

}
