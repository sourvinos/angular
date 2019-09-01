import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

	eventsURL = 'http://localhost:3000/api/events'

	constructor(private http: HttpClient, private router: Router) { }

	ngOnInit(): void {
		this.loadEvents()
	}

	loadEvents() {
		this.http.get(this.eventsURL).subscribe(result => console.log(result))
	}

	goHome() {
		this.router.navigate(['/eventsHome'])
	}

}