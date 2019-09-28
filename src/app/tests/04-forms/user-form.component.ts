import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

import { UserService } from './user.service';
import { IUser } from './user';

export interface IContext {
	data: string;
}

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

	@ViewChild('modalTemplate')

	public modalTemplate: ModalTemplate<IContext, string, string>

	id: string;
	user: IUser;
	isNewRecord: boolean = true;
	subHeader: string = '';

	constructor(private service: UserService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, public modalService: SuiModalService) { };

	ngOnInit() {
		this.subHeader = 'New';
		this.id = this.route.snapshot.paramMap.get('id');
		if (this.id) {
			this.isNewRecord = false;
			this.subHeader = 'Edit';
			this.populateFields();
		}
	}

	form = this.formBuilder.group({
		id: 0,
		firstName: [''],
		lastName: ['']
	})

	populateFields() {
		this.service.getUser(this.id).subscribe(
			result => {
				this.user = result;
				this.form.get('id').setValue(this.user.id);
				this.form.get('firstName').setValue(this.firstName);
				this.form.get('lastName').setValue(this.lastName);
			},
			error => {
				console.log(error);
			});;
	}

	get firstName() {
		return this.form.get('firstName');
	}

	get lastName() {
		return this.form.get('lastName');
	}

	getErrorMessage() {
		return 'This field is required!';
	}

	save() {
		if (this.id == null) {
			this.service.addUser(this.form.value).subscribe(data => this.router.navigate(['/users']), error => console.log(error));
		} else {
			this.service.updateUser(this.form.value.id, this.form.value).subscribe(data => this.router.navigate(['/users']), error => console.log(error));
		}
	}

	delete() {
		if (this.id != null) {
			this.service.deleteUser(this.id).subscribe(data => {
				this.router.navigate(['/users'])
			}, error => console.log(error));
		}
	}

	public open(dynamicContent: string = "Example") {
		const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

		config.closeResult = "closed!";
		config.context = { data: dynamicContent };

		this.modalService
			.open(config)
			.onApprove(result => { /* approve callback */ })
			.onDeny(result => { /* deny callback */ });
	}
}
