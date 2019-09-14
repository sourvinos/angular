import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any

@Component({
	selector: 'semantic',
	templateUrl: './semantic-ui.component.html',
	styleUrls: ['./semantic-ui.component.css']
})

export class SemanticComponent implements AfterViewInit {

	message: string = ''

	ngAfterViewInit() {
		$('.ui.dropdown').dropdown();
	}

	openDialog() {
		$('.ui.modal').modal({
			inverted: true,
			onApprove: () => {
				this.saveRecord()
				this.showToast('Record saved')
			}
		}).modal('show')
	}

	saveRecord() {
		console.log('Saving record')
	}

	showToast(message: string) {
		this.message = message
		var x = document.getElementById("snackbar");
		x.className = "show";
		setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
	}

}
