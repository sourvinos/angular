import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

    postId: number

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this.activatedRoute.params.subscribe((params: Params) => { this.postId = params['postId'] })
    }

    ngOnInit() { }

    goBack() {
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute })
    }

}
