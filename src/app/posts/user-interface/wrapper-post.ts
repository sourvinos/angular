import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'wrapper-post',
	templateUrl: './wrapper-post.html',
	styleUrls: ['./wrapper-post.css']
})

export class WrapperComponent {

	userId: number

	constructor(private router: Router) { }

	loadPosts(userId: number) {
		this.router.navigate(['/posts/user/' + userId])
	}

}