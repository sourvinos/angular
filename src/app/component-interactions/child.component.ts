import { Component, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material'
import { IndexDialogComponent } from './index-dialog.component'
import { Fruit } from './parent.component'

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildComponent {

    @Input() fruits: Fruit[]
    @Output() selectEvent = new EventEmitter()

    selectedIndex: number

    constructor(public dialog: MatDialog) { }

    // T
    lookupIndex(
        lookupArray: any[],
        title: string,
        fields: any[],
        headers: any[],
        widths: any[],
        visibility: any[],
        justify: any[],
        e: { target: { value: any } }) {
        const filteredArray = []
        console.log(e.target.value)
        lookupArray.filter(x => {
            if (x.description.toUpperCase().includes(e.target.value.toUpperCase())) {
                filteredArray.push(x)
            }
        })
        if (filteredArray.length > 0) {
            this.showModalIndex(filteredArray, title, fields, headers, widths, visibility, justify)
        }
    }

    // T
    private showModalIndex(
        elements: any,
        title: string,
        fields: any[],
        headers: any[],
        widths: any[],
        visibility: any[],
        justify: any[]) {
        const dialog = this.dialog.open(IndexDialogComponent, {
            height: '619px',
            width: '600px',
            data: {
                records: elements,
                title: title,
                fields: fields,
                headers: headers,
                widths: widths,
                visibility: visibility,
                justify: justify
            }
        })
        dialog.afterClosed().subscribe(result => {
            console.log('Came back from the modal', result)
            this.selectEvent.emit(result)
            dialog.afterClosed().subscribe((result) => {
                // this.patchFields(result, lookupId, lookupDescription)
            })

        })
    }

    // T
    onSelectFruit(index: number) {
        this.selectEvent.emit(this.fruits[index])
    }

    startTimer() {
        console.log('Timer started')
    }

    stopTimer() {
        console.log('Timer stopped')
    }

}
