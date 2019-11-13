import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'form-post',
    templateUrl: './form-post.html',
    styleUrls: ['./form-post.css']
})
export class FormPostComponent implements OnInit {

    postId: number

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.postId = params['postId']
        })
    }

    ngOnInit() { }

    goBack() {
        this.router.navigate(['../../'], {
            relativeTo: this.activatedRoute
        })
    }

}
