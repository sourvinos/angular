import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { IPost } from '../classes/model.post';
import { PostService } from '../classes/service.post';

@Component({
	selector: 'list-post',
	templateUrl: './list-post.html',
	styleUrls: ['./list-post.css']
})

export class ListPostComponent implements OnDestroy {

	userId: number
	posts: IPost[]
	navigationSubscription: any

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
		this.activatedRoute.params.subscribe((params: Params) => { this.userId = +params['userId'] })
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				this.postService.getPosts(this.userId).subscribe(result => {
					this.posts = result
					console.log(this.posts)
				})
			}
		});
	}

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe()
		}
	}

	gotoPost(postId: number) {
		this.router.navigate(['post/', postId], {
			relativeTo: this.activatedRoute
		})
	}

}