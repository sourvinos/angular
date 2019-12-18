import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core'
import { IndexInteractionService } from 'src/app/services/interaction.service'

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

    // @Output() selectEvent = new EventEmitter()

    currentRow: number = 0

    indexContent: any
    table: any
    rowHeaderHeight: any
    rowHeight: number = 0

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

    private gotoRow(position) {
        if (!isNaN(parseInt(position))) {
            this.clearAllRowHighlights()
            this.highlightRow(this.table, position)
        }
        if (position == 'Enter') {
            this.sendRowToService()
        }
        if (position == 'ArrowUp' && this.currentRow > 1) {
            this.clearAllRowHighlights()
            this.highlightRow(this.table, 'up')
            this.sendRowToService()
            if (!this.isRowIntoView(this.table.rows[this.currentRow], position)) {
                // document.getElementById(this.currentRow.toString()).scrollIntoView()
                this.indexContent.scrollTop = (this.currentRow - 1) * this.rowHeight
            }
        }
        if (position == 'ArrowDown' && this.currentRow < this.table.rows.length - 1) {
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
        const rowOffsetTop = row.offsetTop //console.log('') console.log('rowOffsetTop', rowOffsetTop)
        const indexContentScrollTop = this.indexContent.scrollTop //console.log('docindexContentScrollTopViewTop', indexContentScrollTop)
        const rowOffetTopPlusRowOffsetHeight = rowOffsetTop + row.offsetHeight //console.log('rowOffetTopPlusRowOffsetHeight', rowOffetTopPlusRowOffsetHeight)
        const indexContentScrollTopPuslIndexContentOffsetHeight = indexContentScrollTop + this.indexContent.offsetHeight //console.log('indexContentScrollTopPuslIndexContentOffsetHeight', indexContentScrollTopPuslIndexContentOffsetHeight)
        if (direction == 'ArrowUp') {
            if (indexContentScrollTopPuslIndexContentOffsetHeight - rowOffsetTop + this.rowHeight < this.indexContent.offsetHeight) {
                //console.log('InView')
                return true
            }
        }
        if (direction == 'ArrowDown') {
            if (rowOffetTopPlusRowOffsetHeight <= indexContentScrollTopPuslIndexContentOffsetHeight) return true
        }
        return false
    }

    private calculateDimensions() {
        this.indexContent = document.getElementById('index-table').parentNode.parentNode
        this.table = document.getElementById('index-table')
        this.rowHeaderHeight = document.querySelector('thead')
        this.rowHeight = this.table.rows[1].offsetHeight
        if (this.indexContent.scrollHeight <= this.indexContent.offsetHeight) {
            this.indexContent.style.overflowY = 'hidden'
            this.table.style.marginRight = '0px'
        }
    }

    private sendRowToService() {
        this.indexInteractionService.sendObject(this.records[this.currentRow - 1])
    }

}
