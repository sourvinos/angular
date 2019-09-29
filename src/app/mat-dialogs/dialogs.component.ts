import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component'

@Component({
	selector: 'mat-dialogs',
	templateUrl: './dialogs.component.html',
	styleUrls: ['./dialogs.component.css']
})

export class MatDialogsComponent {

	constructor(private dialog: MatDialog) { }

	openDialog() {
		console.log('Opening...');
		this.dialog.open(DeleteDialogComponent).afterClosed().subscribe(response => console.log(response));
	}

}
