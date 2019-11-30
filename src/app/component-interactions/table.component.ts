import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent {

    @Input() records: any[]

    @Input() headers: any
    @Input() widths: any
    @Input() visibility: any
    @Input() justify: any
    @Input() fields: any

    @Output() selectEvent = new EventEmitter()

    currentRow: number = 0

    indexContent: HTMLElement
    table: any
    rowHeaderHeight: any
    rowHeight: number = 0

    ngAfterViewInit() {
        setTimeout(() => {
            // console.log('Inside the table', this.records)
            // console.log('Inside the table', this.fields)
            // console.log('Inside the table', this.headers)
            this.calculateDimensions()
            this.gotoRow('1')
        }, 100)
    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { key: string }) {
        if (event.key == 'Enter') {
            console.log(this.records[this.currentRow - 1])
            this.selectEvent.emit(this.records[this.currentRow - 1])
        }
        this.gotoRow(event.key)
    }

    private gotoRow(position: string) {
        // console.log('Position', position)
        if (!isNaN(parseInt(position))) {
            this.clearAllRowHighlights()
            this.highlightRow(this.table, position)
        }
        if (position == 'ArrowUp' && this.currentRow > 1) {
            this.clearAllRowHighlights()
            this.highlightRow(this.table, 'up')
            if (!this.isRowIntoView(this.table.rows[this.currentRow], position)) {
                document.getElementById(this.currentRow.toString()).scrollIntoView()
                this.indexContent.scrollTop = (this.currentRow - 1) * this.rowHeight + 0
            }
        }
        if (position == 'ArrowDown' && this.currentRow < this.table.rows.length - 1) {
            this.clearAllRowHighlights()
            this.highlightRow(this.table, 'down')
            if (!this.isRowIntoView(this.table.rows[this.currentRow], position)) {
                document.getElementById(this.currentRow.toString()).scrollIntoView(false)
            }
        }
        // this.info = this.records[this.currentRow - 1]
    }

    private highlightRow(table: HTMLTableElement, direction: any) {
        if (!isNaN(direction)) {
            this.currentRow = parseInt(direction)
        } else {
            if (direction == 'up')--this.currentRow
            if (direction == 'down')++this.currentRow
        }
        table.rows[this.currentRow].classList.toggle('selected')
    }

    private clearAllRowHighlights() {
        this.table.querySelectorAll('tr').forEach((element: { classList: { remove: (arg0: string) => void } }) => {
            element.classList.remove('selected')
        })
    }

    private isRowIntoView(row: HTMLTableRowElement, direction: string) {
        const elemTop = row.offsetTop
        const docViewTop = this.indexContent.scrollTop
        const elemBottom = elemTop + row.offsetHeight
        const docViewBottom = docViewTop + this.indexContent.offsetHeight
        if (direction == 'ArrowUp') {
            if (docViewBottom - elemTop + this.rowHeight < this.indexContent.offsetHeight) return true
        }
        if (direction == 'ArrowDown') {
            if (elemBottom <= docViewBottom) return true
        }
        return false
    }

    private calculateDimensions() {
        this.indexContent = (<HTMLElement>document.getElementById('index-content'))
        this.table = (<HTMLTableElement>document.getElementById('index-table'))
        this.rowHeaderHeight = (<HTMLTableSectionElement>document.querySelector('thead'))
        this.rowHeight = this.table.rows[0].offsetHeight
        if (this.indexContent.scrollHeight <= this.indexContent.offsetHeight) {
            this.indexContent.style.overflowY = 'hidden'
            this.table.style.marginRight = '0px'
        }
    }

}
