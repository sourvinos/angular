import { Component, EventEmitter, HostListener, Inject, Output, AfterViewInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
	selector: 'index-dialog',
	templateUrl: './index-dialog.component.html',
	styleUrls: ['./index-dialog.component.css']
})

export class IndexDialogComponent {

	title: string

	fields: any[]
	headers: any[]
	justify: any[]
	visibility: any[]
	widths: any[]

	records: any[]

	selectedRecord: any

	@Output() selectEvent = new EventEmitter()

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

		this.title = data.title

		this.fields = data.fields
		this.headers = data.headers
		this.justify = data.justify
		this.visibility = data.visibility
		this.widths = data.widths

		this.records = data.records

	}

	// Gets an object from the table
	// and updates the local variable
	// which will be displayed in the template
	select(input: any) {
		this.selectedRecord = input
	}

}