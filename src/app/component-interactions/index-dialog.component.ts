import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'index-dialog',
	templateUrl: './index-dialog.component.html',
	styleUrls: ['./index-dialog.component.css']
})

export class IndexDialogComponent {

	// @Output() selectEvent = new EventEmitter()

	selectedRow: string = 'No selection yet'

	constructor(private dialogRef: MatDialogRef<IndexDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

	select(input: any) {
		// this.selectedRow = input
		// console.log(this.selectedRow)
	}

}