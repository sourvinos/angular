import { Component, HostListener, Input, Output, EventEmitter, AfterViewInit } from '@angular/core'
import { IndexInteractionService } from 'src/app/services/interaction.service'

@Component({
    selector: 'custom-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class CustomTableComponent implements AfterViewInit {

    @Input() records: any[]

    @Input() headers: any
    @Input() widths: any
    @Input() visibility: any
    @Input() justify: any
    @Input() fields: any

    // @Output() selectEvent = new EventEmitter()

    currentRow: number = 0

    indexContent: any
    table: any
    rowHeaderHeight: any
    rowHeight: number = 0

    sortOrder: string = 'desc'

    info: string

    constructor(private indexInteractionService: IndexInteractionService) { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.calculateDimensions()
            document.getElementById('table-input').focus()
            this.gotoRow('1')
        }, 100)
    }

    @HostListener('keyup', ['$event']) onkeyup(event: { key: string; target: { getAttribute: { (arg0: string): void; (arg0: string): void } } }) {
        this.gotoRow(event.key)
    }

    private gotoRow(position: string) {
        if (!isNaN(parseInt(position, 10))) {
            this.clearAllRowHighlights()
            this.highlightRow(this.table, position)
        }
        if (position === 'Enter') {
            this.sendRowToService()
        }
        if (position === 'ArrowUp' && this.currentRow > 1) {
            console.log('Up')
            this.clearAllRowHighlights()
            this.highlightRow(this.table, 'up')
            this.sendRowToService()
            if (!this.isRowIntoView(this.table.rows[this.currentRow], position)) {
                this.indexContent.scrollTop = (this.currentRow - 1) * this.rowHeight
            }
        }
        if (position === 'ArrowDown' && this.currentRow < this.table.rows.length - 1) {
            console.log('Down')
            this.clearAllRowHighlights()
            this.highlightRow(this.table, 'down')
            this.sendRowToService()
            this.indexInteractionService.sendObject(this.records[this.currentRow - 1])
            if (!this.isRowIntoView(this.table.rows[this.currentRow], position)) {
                document.getElementById(this.currentRow.toString()).scrollIntoView(false)
            }
        }
    }

    private highlightRow(table: HTMLTableElement, direction: any) {
        if (!isNaN(direction)) {
            this.currentRow = parseInt(direction, 10)
        } else {
            if (direction === 'up')--this.currentRow
            if (direction === 'down')++this.currentRow
        }
        // table.rows[this.currentRow].classList.toggle('selected')
    }

    private clearAllRowHighlights() {
        this.table.querySelectorAll('tr').forEach((element: { classList: { remove: (arg0: string) => void } }) => {
            element.classList.remove('selected')
        })
    }

    private isRowIntoView(row: HTMLTableRowElement, direction: string) {
        const rowOffsetTop = row.offsetTop
        const indexContentScrollTop = this.indexContent.scrollTop
        const rowOffetTopPlusRowOffsetHeight = rowOffsetTop + 50
        const indexContentScrollTopPuslIndexContentOffsetHeight = indexContentScrollTop + this.indexContent.offsetHeight
        if (direction === 'ArrowUp') {
            if (indexContentScrollTopPuslIndexContentOffsetHeight - rowOffsetTop + this.rowHeight < this.indexContent.offsetHeight) {
                return true
            }
        }
        if (direction === 'ArrowDown') {
            if (rowOffetTopPlusRowOffsetHeight <= indexContentScrollTopPuslIndexContentOffsetHeight) return true
        }
        return false
    }

    private calculateDimensions() {
        this.indexContent = document.getElementById('index-table').parentNode.parentNode
        this.table = document.getElementById('index-table')
        this.rowHeaderHeight = document.querySelector('thead')
        // this.rowHeight = this.table.rows[1].offsetHeight
        // if (this.indexContent.scrollHeight <= this.indexContent.offsetHeight) {
        //     this.indexContent.style.overflowY = 'hidden'
        //     this.table.style.marginRight = '0px'
        // }
    }

    private sendRowToService() {
        this.indexInteractionService.sendObject(this.records[this.currentRow - 1])
    }

    compareValues(key: string, order = 'asc') {
        return function innerSort(a: { [x: string]: any; hasOwnProperty: (arg0: string) => any }, b: { [x: string]: any; hasOwnProperty: (arg0: string) => any }) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0
            let comparison = 0
            const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key]
            const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key]
            comparison = varA > varB ? 1 : -1
            return ((order === 'desc') ? (comparison * -1) : comparison)
        }
    }

    sortMe(columnName: string, sortOrder: string) {
        this.records.sort(this.compareValues(columnName.toLowerCase(), sortOrder))
        this.sortOrder = this.sortOrder === 'asc' ? this.sortOrder = 'desc' : this.sortOrder = 'asc'
    }

}
