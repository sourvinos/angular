import { Component } from '@angular/core';

@Component({
	selector: 'events.home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class EventsHomeComponent {

	logout() {
		if (confirm('Logout')) {
			localStorage.removeItem('token')
		}
	}

	get isLoggedIn() {
		if (localStorage.getItem('token')) {
			return true
		} else {
			return false
		}
	}

}