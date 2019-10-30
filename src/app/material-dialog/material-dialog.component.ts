import { MAT_DIALOG_DATA, MatTableDataSource, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject, AfterViewInit, HostListener } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

interface TableItem {
    name: string;
}

export interface Element {
    id: string
    description: string
    gender: string
}

@Component({
    selector: 'app-material-dialog',
    templateUrl: './material-dialog.component.html',
    styleUrls: ['./material-dialog.component.css']
})

export class MaterialDialogComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<MaterialDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    dataSource: MatTableDataSource<TableItem>;
    selection: SelectionModel<TableItem>;

    columns = ['id', 'name', 'gender']
    myElement: Element = { id: '', description: '', gender: '' }
    elements = []

    ngOnInit() {
        // This is for the list loop - don't delete!
        this.elements = this.data.myEmployees
        this.dataSource = new MatTableDataSource<TableItem>(this.elements);
        this.selection = new SelectionModel<TableItem>(false);
    }

    @HostListener('document:keydown', ['$event']) anyEvent(event: { altKey: any; shiftKey: any; key: { toUpperCase: { (): string; (): string; (): string; (): string; (): string; }; }; }) {
        if (event.key == 'Enter') {
            this.getCurrentRow()
            this.dialogRef.close(this.myElement)
            // let row = document.querySelector('tr.selected').textContent
            // console.log(row)
            // this.dialogRef.close(row);
            // let id = document.querySelector('tr.selected').children[0].textContent
            // let description = document.querySelector('tr.selected').children[1].textContent
            // console.log('Id', id, 'Description', description)
        }
    }

    selectElement() {
        // this.myElement = row
        // console.log(row)
        // console.log(this.myElement)
    }

    close(row: any) {
        console.log('Closing')
        this.getCurrentRow()
        this.dialogRef.close(this.myElement)
        // this.dialogRef.close(row);
    }

    getCurrentRow() {
        this.myElement.id = document.querySelector('tr.selected').children[0].textContent
        this.myElement.description = document.querySelector('tr.selected').children[1].textContent
        this.myElement.gender = document.querySelector('tr.selected').children[2].textContent
    }

}
