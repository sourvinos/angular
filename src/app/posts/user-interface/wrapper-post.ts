import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'wrapper-post',
	templateUrl: './wrapper-post.html',
	styleUrls: ['./wrapper-post.css']
})

export class PostWrapperComponent {

	userId: number

	constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

	loadPosts(userId: number) {
		this.router.navigate(['userId/', userId], {
			relativeTo: this.activatedRoute
		})
	}

}