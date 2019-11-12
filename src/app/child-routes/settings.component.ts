import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})

export class SettingsComponent {

	userId: number

	constructor(private router: Router) { }

	loadPosts(userId: number) {
		this.router.navigate(['/settings/profile/user/' + userId])
	}

}