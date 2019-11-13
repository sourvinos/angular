import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost } from '../classes/post.model';

@Component({
	selector: 'list-post',
	templateUrl: './list-post.html',
	styleUrls: ['./list-post.css']
})

export class ListPostComponent implements DoCheck {

	userId: number
	currentUserId: number

	posts: IPost[]

	constructor(private activatedRoute: ActivatedRoute) {
		this.activatedRoute.params.subscribe((params: Params) => { this.userId = +params['userId'] })
	}

	ngDoCheck(): void {
		if (this.currentUserId != this.userId) {
			this.currentUserId = this.userId
			this.activatedRoute.params.subscribe((params: Params) => { this.userId = +params['userId'] })
			this.posts = this.activatedRoute.snapshot.data['postList']
		}
	}

}