import { Component, EventEmitter, HostListener, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'index-dialog',
	templateUrl: './index-dialog.component.html',
	styleUrls: ['./index-dialog.component.css']
})

export class IndexDialogComponent {

	title: string = ''

	fields: any[]
	headers: any[]
	justify: any[]
	visibility: any[]
	widths: any[]

	records: any[]

	@Output() selectEvent = new EventEmitter()

	currentRow: number = 0

	container: any
	table: any
	containerTop: number = 0
	rowHeight: number = 0

	info: string = ''

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

		// console.log(data)

		this.title = data.title

		this.headers = data.headers
		this.justify = data.justify
		this.visibility = data.visibility
		this.widths = data.widths
		this.fields = data.fields

		this.records = data.records
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.container = (<HTMLElement>document.getElementById('container-b'))
			this.table = (<HTMLTableElement>document.getElementById('table-b'))
			this.rowHeight = this.table.rows[0].offsetHeight
			this.gotoNewPosition('1')
			// console.log('container', this.container)
			// console.log('rowHeight', this.rowHeight)
		}, 500);
	}

	@HostListener('document:keydown', ['$event']) anyEvent(event: { key: string; }) {
		if (event.key == 'Enter') {
			document.getElementById('close').click()
		}
		this.gotoNewPosition(event.key)
	}

	private gotoNewPosition(position: string) {
		if (!isNaN(parseInt(position))) {
			this.clearHighlight()
			this.highlightLine(this.table, position)
		}
		if (position == 'ArrowUp' && this.currentRow > 1) {
			this.clearHighlight()
			this.highlightLine(this.table, 'up')
			if (!this.isScrolledIntoView(this.table.rows[this.currentRow], position)) {
				// console.log('Must scroll up')
				document.getElementById(this.currentRow.toString()).scrollIntoView()
				var docViewTop = this.container.scrollTop
				var elemTop = this.table.rows[this.currentRow].offsetTop
				this.container.scrollTop = (this.currentRow - 1) * this.rowHeight
				// if (elemTop <= docViewTop) {
				// 	this.container.scrollTop = (this.currentRow - 1) * 25
				// }
			}
		}
		if (position == 'ArrowDown' && this.currentRow < this.table.rows.length - 1) {
			this.clearHighlight()
			this.highlightLine(this.table, 'down')
			if (!this.isScrolledIntoView(this.table.rows[this.currentRow], position)) {
				// console.log('Must scroll down')
				document.getElementById(this.currentRow.toString()).scrollIntoView(false)
			}
		}
		this.info = this.records[this.currentRow - 1]
	}

	private highlightLine(table: HTMLTableElement, direction: any) {
		if (!isNaN(direction)) {
			this.currentRow = parseInt(direction)
		} else {
			if (direction == 'up')--this.currentRow
			if (direction == 'down')++this.currentRow
		}
		table.rows[this.currentRow].classList.toggle('selected')
	}

	clearHighlight() {
		const rows = this.table.querySelectorAll('tr')
		rows.forEach((element: { classList: { remove: (arg0: string) => void; }; }) => {
			element.classList.remove('selected')
		});
	}

	private isScrolledIntoView(el: HTMLTableRowElement, direction: string) {
		// console.log('');
		var elemTop = el.offsetTop; // console.log('elemTop', elemTop)
		var docViewTop = this.container.scrollTop; // console.log('docViewTop', docViewTop)
		var elemBottom = elemTop + el.offsetHeight; // console.log('elemBottom', elemBottom)
		var docViewBottom = docViewTop + document.getElementById('container-b').offsetHeight; // console.log('docViewBottom', docViewBottom)

		if (direction == 'ArrowUp') {
			if (docViewBottom - elemTop + 24 < this.container.offsetHeight) return true
		}

		if (direction == 'ArrowDown') {
			if (elemBottom <= docViewBottom) return true
		}

		return false

	}

}