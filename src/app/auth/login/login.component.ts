import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
	selector: 'events.login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class EventsLoginComponent {

	constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

	private homeURL = '/eventsHome'
	private serverURL = 'http://localhost:3000/api/login'

	registrationForm = this.formBuilder.group({
		email: [''],
		password: ['']
	})

	get email() {
		return this.registrationForm.get('email')
	}

	get password() {
		return this.registrationForm.get('password')
	}

	submitForm() {
		this.http.post<any>(this.serverURL, this.registrationForm.value).subscribe(result => {
			if (result && result.token) {
				localStorage.setItem('token', result.token)
				this.goHome()
			}
		}, error => {
			console.log(error)
		})
	}

	goHome() {
		this.router.navigate([this.homeURL])
	}

}
