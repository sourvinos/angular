import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'members',
	templateUrl: './members.component.html',
	styleUrls: ['./members.component.css']
})

export class EventsMembersComponent implements OnInit {

	eventsURL = 'http://localhost:3000/api/special'

	constructor(private http: HttpClient, private router: Router) { }

	ngOnInit(): void {
		this.loadEvents()
	}

	loadEvents() {
		this.http.get(this.eventsURL).subscribe(result => console.log(result), err => {
			if (err instanceof HttpErrorResponse) {
				if (err.status === 401) this.router.navigate(['/login'])
			}
		})
	}

	goHome() {
		this.router.navigate(['/eventsHome'])
	}

}