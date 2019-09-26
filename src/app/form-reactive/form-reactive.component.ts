import { Component, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from './username.validator';
import { PasswordValidator } from './password.validator';

@Component({
	selector: 'form-reactive',
	templateUrl: './form-reactive.component.html',
	styleUrls: ['./form-reactive.component.css']
})

export class FormReactiveComponent implements AfterViewInit {

	ngAfterViewInit(): void {
		document.getElementById("userName").focus()
	}

	// Use a formBuilder to build form components
	// instead of FormGroup and FormControl
	constructor(private formBuilder: FormBuilder) { }

	// Create a model for use in the form WITHOUT FormBuilder
	registrationForm = new FormGroup({
		userName: new FormControl(''),
		password: new FormControl(''),
		confirmPassword: new FormControl(''),
		address: new FormGroup({
			city: new FormControl(''),
			state: new FormControl(''),
			zip: new FormControl('')
		})
	});

	// FormBuilder: Create a model for use in the form
	registrationFormWithFormBuilder = this.formBuilder.group({
		userName: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/admin/)]],
		password: ['', Validators.required],
		confirmPassword: ['', Validators.required],
		address: this.formBuilder.group({
			city: [''],
			state: [''],
			zip: ['']
		})
	}, { validator: PasswordValidator });

	// Helper properties (not function) to shorted the code in the form validation
	get userName() {
		return this.registrationFormWithFormBuilder.get('userName');
	}

	get password() {
		return this.registrationFormWithFormBuilder.get('password');
	}

	get confirmPassword() {
		return this.registrationFormWithFormBuilder.get('confirmPassword');
	}

	isFormValid() {
		return this.registrationFormWithFormBuilder.valid ? 'green' : 'red'
	}

	loadAPI() {
		// Setting the values - MUST provide ALL fields
		// OR use registrationForm.patchValue to provice partial data
		console.log('Loading API Data...');
		// Use this.registrationFormWithFormBuilder to use the formBuilder
		// instead of the FormGroup and FormComtrol
		this.registrationFormWithFormBuilder.setValue({
			userName: 'johndoe',
			password: '1234',
			confirmPassword: '1234',
			address: {
				city: 'Corfu Town',
				state: 'Corfu',
				zip: '491 00'
			}
		});
	}

	reset() {
		this.registrationFormWithFormBuilder.reset()
	}

}
