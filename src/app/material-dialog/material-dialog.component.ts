import { MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

interface TableItem {
    name: string;
}

export interface Element {
    id: string
    name: string
}

@Component({
    selector: 'app-material-dialog',
    templateUrl: './material-dialog.component.html',
    styleUrls: ['./material-dialog.component.css']
})

export class MaterialDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { console.log('Inside the constructor', data) }

    dataSource: MatTableDataSource<TableItem>;
    selection: SelectionModel<TableItem>;

    columns = ['id', 'name']
    myElement: Element = { id: '', name: '' }
    elements = []

    ngOnInit() {
        // This is for the list loop - don't delete!
        this.elements = this.data.myEmployees

        this.dataSource = new MatTableDataSource<TableItem>(this.elements);
        console.log('Data into datasource', this.dataSource)
        this.selection = new SelectionModel<TableItem>(false);
    }

    selectElement(el: Element) {
        this.myElement = el
        // console.log(this.myElement)
        // console.log(this.myElement.name)
    }

}
