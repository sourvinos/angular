import { Component, OnInit } from '@angular/core'
import { User } from '../models/user'
import { Form } from '@angular/forms'

@Component({
	selector: 'form-template',
	templateUrl: './form-template.component.html',
	styleUrls: ['./form-template.component.css']
})

export class FormTemplateComponent implements OnInit {

	header: string
	topics: string[] = ['Angular', 'React', 'Vue']
	levels: string[] = ['Beginner', 'Intermediate', 'Ninja']

	isTopicValid: boolean = false
	isLevelValid: boolean = false
	isNewRecord: boolean = false

	userModel = new User()

	constructor() { }

	ngOnInit() {
		this.header = this.isNewRecord ? 'New' : 'Edit'
	}

	validateTopic(value: string) {
		this.isTopicValid = value === 'default' ? false : true
	}

	validateLevel(value: string) {
		this.isLevelValid = value === 'default' ? false : true
	}

	submitForm(formData: Form) {
		console.log(formData)
	}

}
