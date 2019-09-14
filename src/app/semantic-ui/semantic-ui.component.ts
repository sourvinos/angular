import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastMessage } from './message';

declare var $: any

@Component({
	selector: 'semantic',
	templateUrl: './semantic-ui.component.html',
	styleUrls: ['./semantic-ui.component.css']
})

export class SemanticComponent implements AfterViewInit {

	toastParameters = new ToastMessage('', '')

	// message: string = ''
	// type: string = ''

	ngAfterViewInit() {
		$('.ui.dropdown').dropdown();
	}

	openWarningDialog() {
		$('.warning.tiny.modal').modal({
			inverted: true,
			onApprove: () => {
				this.saveRecord()
				this.updateToastParameters('Record saved', 'green')
				this.showCustomToast()
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

}
