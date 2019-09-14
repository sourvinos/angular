import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

declare var $: any

@Component({
	selector: 'snackbar',
	templateUrl: './snackbar.component.html',
	styleUrls: ['./snackbar.component.css']
})

export class SnackbarComponent {

	@Input() message: string
	@Input() type: string

}
