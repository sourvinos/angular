import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'wrapper-post',
	templateUrl: './wrapper-post.html',
	styleUrls: ['./wrapper-post.css']
})

export class PostWrapperComponent implements AfterViewInit {

	userId: number

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
	}

	ngAfterViewInit() { }

	loadPosts(userId: number) {
		this.router.navigate(['userId/', userId], {
			relativeTo: this.activatedRoute
		})
	}

}