import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ToastMessage } from './message';
import { ConfirmModal } from './modal-confirm.component';

declare var $: any

export interface IContext {
	data: string;
}

@Component({
	selector: 'semantic',
	templateUrl: './semantic-ui.component.html',
	styleUrls: ['./semantic-ui.component.css']
})

export class SemanticComponent implements AfterViewInit {

	@ViewChild('modalTemplate')
	public modalTemplate: ModalTemplate<IContext, string, string>

	toastParameters = new ToastMessage('', '')

	// message: string = ''
	// type: string = ''
	colorInfo = '#35bdb2'
	colorWarning = '#eaae00'
	colorDanger = '#e0321c'

	constructor(private modalService: SuiModalService) {

	}
	ngAfterViewInit() {
		$('.ui.dropdown').dropdown();
	}

	openModalDialog() {
		$('.ui.modal').modal({
			inverted: true,
			onApprove: () => {
				this.saveRecord()
				this.displayToast('Record saved', this.colorInfo)
			},
			onDeny: () => {
				this.displayToast('Record not saved', this.colorWarning)
			},
			onClose: () => {
				this.displayToast('Record not saved', this.colorWarning)
			}
		}).modal('show')
	}

	updateToastParameters(message: string, color: string) {
		this.toastParameters.title = message
		this.toastParameters.type = color
	}

	openErrorDialog() {
		$('.error.tiny.modal').modal({
			inverted: true
		}).modal('show')
	}

	saveRecord() {
		console.log('Saving record')
	}

	displayToast(message: string, color: string) {
		this.updateToastParameters(message, color)
		this.showCustomToast()
	}

	showCustomToast() {
		var x = document.getElementById("snackbar");
		x.className = "show";
		setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
	}

	showToast() {
		$('body').toast({
			displayTime: 0,
			message: 'I am a toast, nice to meet you !'
		})
	}

	open() {
		this.modalService
			.open(new ConfirmModal("Are you sure?", "Are you sure about accepting this?", 'small'))
			.onApprove(() => alert("User has accepted."))
			.onDeny(() => alert("User has denied."));
	}

}
