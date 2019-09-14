import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any

@Component({
	selector: 'semantic',
	templateUrl: './semantic-ui.component.html',
	styleUrls: ['./semantic-ui.component.css']
})

export class SemanticComponent implements AfterViewInit {

	message: string = ''
	type: string = ''

	ngAfterViewInit() {
		$('.ui.dropdown').dropdown();
	}

	openWarningDialog() {
		$('.warning.tiny.modal').modal({
			inverted: true,
			onApprove: () => {
				this.saveRecord()
				this.showCustomToast('Record saved', 'green')
			}
		}).modal('show')
	}

	openErrorDialog() {
		$('.error.tiny.modal').modal({
			inverted: true
		}).modal('show')
	}

	saveRecord() {
		console.log('Saving record')
	}

	showCustomToast(message: string, type: string) {
		this.message = message
		this.type = type
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
