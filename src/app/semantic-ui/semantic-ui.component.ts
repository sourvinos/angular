import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any

@Component({
	selector: 'semantic',
	templateUrl: './semantic-ui.component.html',
	styleUrls: ['./semantic-ui.component.css']
})

export class SemanticComponent implements AfterViewInit {

	ngAfterViewInit() {
		$('.ui.dropdown').dropdown();
	}

	openDialog() {
		$('.ui.modal').modal({ inverted: true }).modal('show')
	}

}
