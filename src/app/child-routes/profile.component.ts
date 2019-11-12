import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost } from './post.model';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements DoCheck {

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