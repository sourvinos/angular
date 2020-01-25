import { Component, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Fruit } from './parent.component'
import { IndexDialogComponent } from '../shared-components/index-dialog/index-dialog.component'

import * as pdfMake from 'pdfmake/build/pdfmake.js'
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js'
import { DataRowOutlet } from '@angular/cdk/table'

pdfMake.vfs = pdfFonts.pdfMake.vfs

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildComponent {

    @Input() fruits: Fruit[]

    headers = ['Id', 'Description', 'Kingdom', 'Amount', 'Time']
    widths = ['', '', '200px', '100px', '500px']
    visibility = ['none', '', '', '', '']
    justify = ['center', 'left', 'left', 'right', 'left']
    fields = ['id', 'description', 'kingdom', 'amount', 'time']

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

    onSortArrayByName() {
        this.fruits.sort((a, b) => {
            if (a.description > b.description) return 1
            if (a.description < b.description) return -1
        })
        console.log('Sorted by name', this.fruits)
    }

    onSortArrayByPrice() {
        this.fruits.sort((a, b) => {
            if (a.amount > b.amount) return 1
            if (a.amount < b.amount) return -1
        })
        console.log('Sorted by price', this.fruits)
    }

    onSortArrayByTime() {
        this.fruits.sort((a, b) => {
            if (a.time > b.time) return 1
            if (a.time < b.time) return -1
        })
        console.log('Sorted by time', this.fruits)
    }

    buildTableBody(data: any[], columns: any[], align: any[]) {
        var body = []
        body.push([{ text: 'Description', style: 'tableHeader', alignment: 'center' }, { text: 'Time', style: 'tableHeader', alignment: 'center' }])
        data.forEach(function (row) {
            var dataRow = []
            columns.forEach((element, index) => {
                // dataRow.push(row[column].toString())
                // dataRow.push({ text: row[element].toString(), alignment: 'center', color: '#006400' })
                dataRow.push({ text: row[element].toString(), alignment: align[index].toString(), color: '#006400' })
            })
            body.push(dataRow)
        })
        return body
    }

    table(data: any[], columns: any[], align: any[]) {
        return {
            table: {
                headerRows: 1,
                widths: ['90%', '10%'],
                heights: 50,
                body: this.buildTableBody(data, columns, align)
            },
            // layout: 'lightHorizontalLines'
        }
    }

    makePdf() {
        pdfMake.vfs = pdfFonts.pdfMake.vfs
        var dd = {
            pageMargins: [150, 10, 30, 50], // left, top, right, bottom
            content: [
                this.table(this.fruits, ['description', 'time'], ['left', 'right'])
            ]
        }
        pdfMake.createPdf(dd).open()
    }

}