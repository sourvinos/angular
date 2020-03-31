import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material'
import * as pdfMake from 'pdfmake/build/pdfmake.js'
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js'
import { IndexInteractionService } from '../../services/interaction.service'
import { Fruit, Transfer } from './parent.component'


pdfMake.vfs = pdfFonts.pdfMake.vfs

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildComponent {

    @Input() fruits: Fruit[]
    @Input() transfers: Transfer[]

    headers = ['Id', 'Description', 'Kingdom', 'Amount', 'Time']
    widths = ['', '', '200px', '100px', '500px']
    visibility = ['none', '', '', '', '']
    justify = ['center', 'left', 'left', 'right', 'left']
    fields = ['id', 'description', 'kingdom', 'amount', 'time']

    @Output() selectEvent = new EventEmitter()

    selectedIndex: number

    constructor(public dialog: MatDialog, private interactionService: IndexInteractionService) { }

    // T 
    onSelectFruit(index: number) {
        this.selectEvent.emit(this.transfers[index])
    }

    startTimer() {
        console.log('Timer started')
    }

    stopTimer() {
        console.log('Timer stopped')
    }

    onSortArrayByName() {
        this.fruits.sort((a, b) => {
            if (a.description > b.description) return 1
            if (a.description < b.description) return -1
        })
        console.log('Sorted by name', this.transfers)
    }

    onSortArrayByPrice() {
        this.fruits.sort((a, b) => {
            if (a.amount > b.amount) return 1
            if (a.amount < b.amount) return -1
        })
        console.log('Sorted by price', this.transfers)
    }

    onSortArrayByTime() {
        this.transfers.sort((a, b) => {
            if (a.time > b.time) return 1
            if (a.time < b.time) return -1
        })
        console.log('Sorted by time', this.transfers)
    }

    makePdf() {
        this.interactionService.sendArray(this.fruits)
    }

}
