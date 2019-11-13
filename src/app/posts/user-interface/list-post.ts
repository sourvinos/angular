import { PostService } from './../classes/post.service';
import { Component, DoCheck, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { IPost } from '../classes/post.model';

@Component({
	selector: 'list-post',
	templateUrl: './list-post.html',
	styleUrls: ['./list-post.css']
})

export class ListPostComponent implements DoCheck, OnDestroy {

	userId: number
	currentUserId: number

	posts: IPost[]

	navigationSubscription: any

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
		this.activatedRoute.params.subscribe((params: Params) => { this.userId = +params['userId'] })
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.postService.getPosts(this.userId).subscribe(result => { this.posts = result })
			}
		});
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe()
		}
	}

	ngDoCheck(): void {
		if (this.currentUserId != this.userId) {
			this.currentUserId = this.userId
			this.activatedRoute.params.subscribe((params: Params) => {
				this.userId = +params['userId']
			})
			console.log('Getting posts for new user')
			// this.posts = this.activatedRoute.snapshot.data['postList']
			this.postService.getPosts(this.userId).subscribe(result => { this.posts = result })
		}
	}

	gotoPost(postId: number) {
		this.router.navigate(['post/', postId], {
			relativeTo: this.activatedRoute
		})
	}

}