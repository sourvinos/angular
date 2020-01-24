import { Component, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Fruit } from './parent.component'
import { IndexDialogComponent } from '../shared-components/index-dialog/index-dialog.component'

const jsPDF = require('jspdf')
require('jspdf-autotable')

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

    createPdf() {
        var doc = new jsPDF();
        doc.autoTable({
            head: [['Name', 'Email', 'Country']],
            body: [
                ['David', 'david@example.com', 'Sweden'],
                ['Castille', 'castille@example.com', 'Norway'],
            ],
            theme: 'plain',
            columnStyles: {
                1: { halign: 'center' },
                2: { halign: 'right' }
            }
        })
        doc.addPage('a4', '1')
        doc.autoTable({
            head: [['Name', 'Email', 'Country']],
            body: [
                ['David', 'david@example.com', 'Sweden'],
                ['Castille', 'castille@example.com', 'Norway'],
            ],
            theme: 'plain',
            columnStyles: {
                1: { halign: 'center' },
                2: { halign: 'right' }
            }
        })
        doc.output('pdfobjectnewwindow')
        // window.open(URL.createObjectURL(doc.output("dataurlnewwindow")))
        // doc.save('table.pdf')
        // let row: any[] = []
        // let rowD: any[] = []
        // let col = ['Id', 'Description', 'Time']
        // let title = "Sample Report"
        // for (let a = 0; a < this.fruits.length; a++) {
        //     row.push(this.fruits[a].id)
        //     row.push(this.fruits[a].description)
        //     row.push(this.fruits[a].time)
        //     rowD.push(row);
        //     row = [];
        // }
        // this.getReport(col, rowD, title);
    }

    getReport(col: any[], rowD: any[], title: any) {
        const totalPagesExp = "{total_pages_count_string}";
        let pdf = new jsPDF('l', 'pt', 'legal');
        pdf.setTextColor(51, 156, 255);
        pdf.text("Sample1", 450, 40);
        pdf.text("Email:", 450, 60);
        pdf.text("Phone:", 450, 80);
        pdf.text("" + title, 435, 100)
        pdf.setLineWidth(1.5);
        pdf.line(5, 107, 995, 107)
        var pageContent = function (data) {
            var str = "Page " + data.pageCount;
            if (typeof pdf.putTotalPages === 'function') {
                str = str + " of " + totalPagesExp;
            }
            pdf.setFontSize(10);
            var pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
            pdf.text(str, data.settings.margin.left, pageHeight - 10)
        };
        pdf.autoTable(col, rowD,
            {
                addPageContent: pageContent,
                margin: { top: 110 },
            });

        if (typeof pdf.putTotalPages === 'function') {
            pdf.putTotalPages(totalPagesExp);
        }
        pdf.save(title + '.pdf');
    }
}
