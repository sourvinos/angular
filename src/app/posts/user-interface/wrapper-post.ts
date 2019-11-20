import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'wrapper-post',
	templateUrl: './wrapper-post.html',
	styleUrls: ['./wrapper-post.css']
})

export class PostWrapperComponent implements AfterViewInit {

	userId: number

	// 'italic' is used in the template for class binding
	// 'special' is the name of the class in the css
	special: string = "special"

	// isItalic is used in the template for class binding

	isItalic: boolean = true

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
	}

	ngAfterViewInit() { }

	loadPosts(userId: number) {
		this.router.navigate(['userId/', userId], {
			relativeTo: this.activatedRoute
		})
	}

}