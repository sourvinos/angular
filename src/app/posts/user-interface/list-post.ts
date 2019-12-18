import { IndexInteractionService } from './../../services/interaction.service'
import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router'
import { IPost } from '../classes/model.post'
import { PostService } from '../classes/service.post'
import { MatDialog } from '@angular/material'
import { IndexDialogComponent } from 'src/app/shared-components/index-dialog/index-dialog.component'

@Component({
	selector: 'list-post',
	templateUrl: './list-post.html',
	styleUrls: ['./list-post.css']
})

export class PostListComponent implements OnDestroy {

	userId: number
	posts: IPost[]
	navigationSubscription: any
	errorMessage: string = ''

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService, public dialog: MatDialog, private _interactionService: IndexInteractionService) {
		this.activatedRoute.params.subscribe((params: Params) => { this.userId = +params['userId'] })
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				console.log('Constructor Navigation end')
				this.postService.getPosts(this.userId).subscribe(result => this.posts = result)
			}
		})
	}

	ngOnInit() { }

	ngOnDestroy() {
		if (this.navigationSubscription) {
			this.navigationSubscription.unsubscribe()
		}
	}

	// T
	getPost(postId: number) {
		this.router.navigate(['post/', postId], {
			relativeTo: this.activatedRoute
		})
	}

	// T
	lookupIndex(
		lookupArray: any[],
		title: string,
		fields: any[],
		headers: any[],
		widths: any[],
		visibility: any[],
		justify: any[],
		value: string) {
		let filteredArray = []
		console.log('value', value + ' lookupArray', lookupArray)
		lookupArray.filter(x => {
			if (x.title.toUpperCase().includes(value.toUpperCase())) {
				filteredArray.push(x)
			}
		})
		if (filteredArray.length > 0) {
			this.showModalIndex(filteredArray, title, fields, headers, widths, visibility, justify)
		}
	}

	private showModalIndex(
		elements: any,
		title: string,
		fields: any[],
		headers: any[],
		widths: any[],
		visibility: any[],
		justify: any[]) {
		const dialog = this.dialog.open(IndexDialogComponent, {
			height: '644px',
			width: '600px',
			data: {
				records: elements,
				title: title,
				fields: fields,
				headers: headers,
				widths: widths,
				visibility: visibility,
				justify: justify
			}
		})
		dialog.afterClosed().subscribe(result => {
			dialog.afterClosed().subscribe((result) => {
				console.log(result)
			})
		})
	}

}