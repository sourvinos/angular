import { Component, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material'
import { IndexDialogComponent } from './index-dialog.component'

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildComponent {

    @Input() fruits: []
    @Output() selectEvent = new EventEmitter()

    selectedIndex: number

    constructor(public dialog: MatDialog) { }

    // T
    openDialog(elements: any) {
        const dialog = this.dialog.open(IndexDialogComponent, {
            height: '400px',
            width: '600px',
            data: {
                records: elements,
                headers: ['Id', 'Description', 'Amount'],
                widths: ['100px', '300px', '100px'],
                visibility: ['', '', ''],
                justify: ['center', 'left', 'right']
            }
        })
        dialog.afterClosed().subscribe(result => {
            this.selectFruit(result.id)
        })
    }

    // T
    selectFruit(index: number) {
        this.selectEvent.emit(this.fruits[index])
    }

    startTimer() {
        console.log('Timer started')
    }

    stopTimer() {
        console.log('Timer stopped')
    }

}
