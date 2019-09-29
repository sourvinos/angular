import { AfterViewInit, Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from './../services/dialog-service';
import { PasswordValidator } from './password.validator';
import { ForbiddenNameValidator } from './username.validator';
import { SuiModalService } from 'ng2-semantic-ui';
import { ConfirmModal } from '../semantic-ui/modal-confirm.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SomeComponent } from '../ngx-bootstrap/some.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Subject } from 'rxjs';
import { ConfirmLeaveComponent } from '../confirm-leave/confirm-leave.component';

@Component({
	selector: 'form-reactive',
	templateUrl: './form-reactive.component.html',
	styleUrls: ['./form-reactive.component.css']
})

export class FormReactiveComponent implements AfterViewInit {

	message: string;
	private isSaving: boolean = false
	modalRef: BsModalRef

	ngAfterViewInit(): void {
		document.getElementById("userName").focus()
	}

	// Use a formBuilder to build form components
	// instead of FormGroup and FormControl
	constructor(private formBuilder: FormBuilder, private dialogService: DialogService, private SuimodalService: SuiModalService, private modalService: BsModalService, private dialog: MatDialog) { }

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

	save() {

	}

	canDeactivate() {
		console.log("Deactivating...")
		this.isSaving = false
		if (!this.isSaving && this.registrationFormWithFormBuilder.dirty) {
			const subject = new Subject<boolean>();
			const modal = this.modalService.show(ConfirmLeaveComponent, { 'class': 'modal-dialog-primary' });
			modal.content.subject = subject;
			return subject.asObservable();
		} else {
			return true
		}
	}

	// canDeactivate(): boolean {
	// 	if (!this.isSaving && this.registrationFormWithFormBuilder.dirty) {
	// 		this.isSaving = false
	// 	}
	// 	return true
	// }

	// canDeactivate(): boolean {
	// 	if (!this.isSaving && this.registrationFormWithFormBuilder.dirty) {
	// 		this.isSaving = false
	// 		this.modalRef = this.modalService.show(SomeComponent)
	// 	}
	// 	return true
	// }

	// openModal() {
	// 	this.modalRef = this.modalService.show(SomeComponent);
	// }

	// canDeactivate(): boolean {
	// 	if (!this.isSaving && this.registrationFormWithFormBuilder.dirty) {
	// 		this.isSaving = false
	// 		this.SuimodalService
	// 			.open(new ConfirmModal("Are you sure?", "Are you sure about accepting this?", 'small'))
	// 			.onDeny(() => {
	// 				return false
	// 			})
	// 			.onApprove(result => {
	// 				console.log(result)
	// 				return true
	// 			})
	// 	} else {
	// 		return true
	// 	}
	// }

}
