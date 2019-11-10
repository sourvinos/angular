import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})

export class SettingsComponent {

	albumId: number

	constructor(private router: Router) { }

	gotoProfile(albumId: number) {
		console.log('Going to profile:', albumId)
		this.router.navigate(['/settings/profile/' + albumId])
	}

}