import { Component, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Fruit, Transfer } from './parent.component'
import { IndexDialogComponent } from '../shared-components/index-dialog/index-dialog.component'

import * as pdfMake from 'pdfmake/build/pdfmake.js'
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js'

pdfMake.vfs = pdfFonts.pdfMake.vfs

@Component({
    selector: 'child',
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
        this.transfers.sort((a, b) => {
            if (a.time > b.time) return 1
            if (a.time < b.time) return -1
        })
        pdfMake.vfs = pdfFonts.pdfMake.vfs
        var dd = {
            pageMargins: [50, 30, 50, 50],
            pageOrientation: 'landscape',
            defaultStyle: { fontSize: 8 },
            footer: function (currentPage: any, pageCount: any) {
                return {
                    table: {
                        widths: '*',
                        body: [[{ text: "Page " + currentPage.toString() + ' of ' + pageCount, alignment: 'right', style: 'normalText', margin: [0, 10, 50, 0], aligment: 'left' }]]
                    },
                    layout: 'noBorders'
                }
            },
            content: [{
                text: 'TRANSFERS FOR: 20/02/2020 - DRIVER: ΣΤΑΜΑΤΗΣ',
                margin: [0, 0, 0, 20],
                fontSize: 8
            },
            // content: [
            //     {
            //         stack: ['Date 28/01/2020',
            //             { text: 'Driver: STAMATIS', style: 'subheader' },
            //         ],
            //         margin: [0, 0, 0, 20],
            //         fontSize: 10,
            //         style: 'header'
            //     },
            (this.table(this.transfers, ['time', 'pickupPoint', 'adults', 'kids', 'free', 'total', 'customer', 'remarks', 'destination'], ['center', 'left', 'right', 'right', 'right', 'right', 'left', 'left', 'center']))]
        }
        pdfMake.createPdf(dd).open()
        // pdfMake.createPdf(dd).download('Transfers.pdf')
    }

    buildTableBody(data: any[], columns: any[], align: any[]) {
        let body: any = []
        let count: number = 0
        let total: number[] = [0, 0, 0, 0]
        let totals: number[] = [0, 0, 0, 0]
        let pickupPoint = data[1].pickupPoint
        body.push(this.createHeaders())
        data.forEach(function (row) {
            var dataRow = []
            if (row.pickupPoint == pickupPoint) {
                count += 1
                total[0] += Number(row.adults)
                total[1] += Number(row.kids)
                total[2] += Number(row.free)
                total[3] += Number(row.total)
            } else {
                if (count > 1) {
                    dataRow.push(
                        { text: '' },
                        { text: 'TOTAL: ' + pickupPoint, bold: true },
                        { text: String(total[0]) == "0" ? "" : String(total[0]), alignment: 'right', fillColor: 'white', bold: true },
                        { text: String(total[1]) == "0" ? "" : String(total[1]), alignment: 'right', fillColor: 'white', bold: true },
                        { text: String(total[2]) == "0" ? "" : String(total[2]), alignment: 'right', fillColor: 'white', bold: true },
                        { text: String(total[3]) == "0" ? "" : String(total[3]), alignment: 'right', fillColor: 'white', bold: true },
                        { text: '' },
                        { text: '' },
                        { text: '' }
                    )
                    body.push(dataRow)
                    // body.push(this.createTotalLine(pickupPoint, total))
                    dataRow = []
                }
                count = 1
                total[0] = Number(row.adults)
                total[1] = Number(row.kids)
                total[2] = Number(row.free)
                total[3] = Number(row.total)

                pickupPoint = row.pickupPoint
            }
            totals[0] += Number(row.adults)
            totals[1] += Number(row.kids)
            totals[2] += Number(row.free)
            totals[3] += Number(row.total)
            columns.forEach((element, index) => {
                if (row[element].toString() == "0") row[element] = ""
                dataRow.push({ text: row[element].toString(), alignment: align[index].toString(), color: '#000000' })
            })
            body.push(dataRow)
        })
        let dataRow = []
        dataRow.push(
            { text: '' },
            { text: 'GRAND TOTAL FOR DRIVER ', bold: true },
            { text: String(totals[0]) == "0" ? "" : String(totals[0]), alignment: 'right', fillColor: 'white', bold: true },
            { text: String(totals[1]) == "0" ? "" : String(totals[1]), alignment: 'right', fillColor: 'white', bold: true },
            { text: String(totals[2]) == "0" ? "" : String(totals[2]), alignment: 'right', fillColor: 'white', bold: true },
            { text: String(totals[3]) == "0" ? "" : String(totals[3]), alignment: 'right', fillColor: 'white', bold: true },
            { text: '' },
            { text: '' },
            { text: '' }
        )
        body.push(dataRow)

        return body
    }

    table(data: any[], columns: any[], align: any[]) {
        return {
            table: {
                headerRows: 1,
                dontBreakRows: true,
                body: this.buildTableBody(data, columns, align),
                heights: 10,
                widths: [20, '*', 15, 15, 15, 15, 120, 120, 20],
            },
            layout: {
                hLineColor: function (i: number, node: { table: { widths: string | any[] } }) { return (i === 0 || i === node.table.widths.length) ? '#dddddd' : '#dddddd' },
                vLineColor: function (i: number, node: { table: { widths: string | any[] } }) { return (i === 1 || i === node.table.widths.length - 1) ? '#dddddd' : '#dddddd' },
                vLineStyle: function () { return { dash: { length: 19, space: 0 } } },
                paddingTop: function (i: number) { return (i === 0) ? 5 : 5 },
                paddingBottom: function () { return 2 }
            }
        }
    }

    createHeaders() {
        return [
            { text: 'TIME', style: 'tableHeader', alignment: 'center' },
            { text: 'PICKUP POINT', style: 'tableHeader', alignment: 'center' },
            { text: 'A', style: 'tableHeader', alignment: 'center' },
            { text: 'K', style: 'tableHeader', alignment: 'center' },
            { text: 'F', style: 'tableHeader', alignment: 'center' },
            { text: 'T', style: 'tableHeader', alignment: 'center' },
            { text: 'CUSTOMER', style: 'tableHeader', alignment: 'center' },
            { text: 'REMARKS', style: 'tableHeader', alignment: 'center' },
            { text: 'D', style: 'tableHeader', alignment: 'center' },
        ]
    }

    createTotalLine(pickupPoint: string, total: any[]) {
        let dataRow = [
            { text: '' },
            { text: 'TOTAL: ' + pickupPoint, bold: true },
            { text: String(total[0]) == "0" ? "" : String(total[0]), alignment: 'right', fillColor: 'white', bold: true },
            { text: String(total[1]) == "0" ? "" : String(total[1]), alignment: 'right', fillColor: 'white', bold: true },
            { text: String(total[2]) == "0" ? "" : String(total[2]), alignment: 'right', fillColor: 'white', bold: true },
            { text: String(total[3]) == "0" ? "" : String(total[3]), alignment: 'right', fillColor: 'white', bold: true },
            { text: '' },
            { text: '' },
            { text: '' }
        ]
        return dataRow
    }
}