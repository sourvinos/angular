import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ToastMessage } from '../semantic-ui/message';

declare var $: any

@Component({
	selector: 'snackbar',
	templateUrl: './snackbar.component.html',
	styleUrls: ['./snackbar.component.css']
})

export class SnackbarComponent {

	@Input() message: ToastMessage

}
