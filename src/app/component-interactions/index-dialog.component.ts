import { Component, Inject, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'index-dialog',
	templateUrl: './index-dialog.component.html',
	styleUrls: ['./index-dialog.component.css']
})

export class IndexDialogComponent {

	fields: any[]
	headers: any[]
	justify: any[]
	visibility: any[]
	widths: any[]

	records: any[]

	@Output() selectEvent = new EventEmitter()

	scrollRows: number

	currentTableRow: number = 0
	info: any
	moreInfo: string = ''
	containerTop = 0

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
		this.headers = data.headers
		this.justify = data.justify
		this.visibility = data.visibility
		this.widths = data.widths
		this.fields = data.fields

		this.records = data.records
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.gotoNewPosition('1')
		}, 1000);
	}

	@HostListener('document:keydown', ['$event']) anyEvent(event: { key: string; }) {
		if (event.key == 'Enter') {
			this.selectRow(this.currentTableRow - 1)
			document.getElementById('close').click()
		}
		this.gotoNewPosition(event.key)
	}

	private gotoNewPosition(position: string) {
		const table = (<HTMLTableElement>document.getElementById('myTable'))
		if (!isNaN(parseInt(position))) {
			// console.log('Direct input from init or mouse', position)
			this.clearHighlight(table)
			this.highlightLine(table, position)
		}
		if (position == 'ArrowUp' && this.currentTableRow > 1) {
			this.clearHighlight(table)
			this.highlightLine(table, 'up')
			if (!this.isScrolledIntoView(table.rows[this.currentTableRow])) {
				document.getElementById(this.currentTableRow.toString()).scrollIntoView()
				const container = (<HTMLTableElement>document.getElementById('container'))
				var docViewTop = container.scrollTop
				var elemTop = table.rows[this.currentTableRow].offsetTop
				if (elemTop <= docViewTop) {
					this.moreInfo = 'Must scroll down by ' + (this.currentTableRow - 1) * 25
					container.scrollTop = (this.currentTableRow - 1) * 25
				}
			}
		}
		if (position == 'ArrowDown' && this.currentTableRow < table.rows.length - 1) {
			this.clearHighlight(table)
			this.highlightLine(table, 'down')
			if (!this.isScrolledIntoView(table.rows[this.currentTableRow])) {
				document.getElementById(this.currentTableRow.toString()).scrollIntoView(false)
			}
		}
		this.info = this.records[this.currentTableRow - 1]
	}

	private highlightLine(table: HTMLTableElement, direction: any) {
		// If a row is clicked (direction = row.id)
		if (!isNaN(direction)) {
			this.currentTableRow = parseInt(direction)
		} else {
			if (direction == 'up')--this.currentTableRow
			if (direction == 'down')++this.currentTableRow
		}
		table.rows[this.currentTableRow].classList.toggle('selected')
	}

	clearHighlight(table: HTMLTableElement) {
		const rows = table.querySelectorAll('tr')
		rows.forEach(element => {
			element.classList.remove('selected')
		});
	}

	private isScrolledIntoView(el: HTMLTableRowElement) {
		const container = (<HTMLTableElement>document.getElementById('container'))
		var docViewTop = container.scrollTop; // console.log(''); console.log('docViewTop', docViewTop)
		var docViewBottom = docViewTop + document.getElementById('container').offsetHeight; // console.log('docViewBottom', docViewBottom)
		var elemTop = el.offsetTop; // console.log('elemTop', elemTop)
		var elemBottom = elemTop + el.offsetHeight; // console.log('elemBottom', elemBottom)
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	scroll() {
		const container = (<HTMLTableElement>document.getElementById('container'))
		container.scrollTop = this.scrollRows
	}

	private selectRow(index: number) {
		// console.log(index)
	}

}