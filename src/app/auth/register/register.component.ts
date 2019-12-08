import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'

@Component({
	selector: 'events.register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})

export class EventsRegisterComponent {

	constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

	private homeURL = '/eventsHome'
	private serverURL = 'http://localhost:3000/api'

	registrationForm = this.formBuilder.group({
		userName: [''],
		password: ['']
	})

	get userName() {
		return this.registrationForm.get('userName')
	}

	get password() {
		return this.registrationForm.get('password')
	}

	submitForm() {
		this.http.post(this.serverURL + '/register', this.registrationForm.value).subscribe(result => console.log(result))
	}

	goHome() {
		this.router.navigate([this.homeURL])
	}

}
