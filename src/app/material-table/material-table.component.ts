import { SelectionModel } from '@angular/cdk/collections';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { EmployeeService } from '../employees/classes/employee.service';
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component';

interface TableItem {
	name: string;
}

@Component({
	selector: 'material-table',
	templateUrl: './material-table.component.html',
	styleUrls: ['./material-table.component.css']
})

export class MaterialTableComponent implements OnInit {

	data = [];
	columns = ['id', 'name']

	dataSource: MatTableDataSource<TableItem>;
	selection: SelectionModel<TableItem>;

	constructor(private employeeService: EmployeeService, public dialog: MatDialog) { }

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((result) => {
			this.dataSource = new MatTableDataSource<TableItem>(result);
			this.selection = new SelectionModel<TableItem>(false);
		})
	}

	@HostListener('document:keydown', ['$event']) anyEvent(event: { altKey: any; shiftKey: any; key: { toUpperCase: { (): string; (): string; (): string; (): string; (): string; }; }; }) {
		if (event.key == 'Enter') {
			let id = document.querySelector('tr.selected').children[0].textContent
			let description = document.querySelector('tr.selected').children[1].textContent
			console.log('Id', id, 'Description', description)
		}
	}

	doubleClick() {
		let id = document.querySelector('tr.selected').children[0].textContent
		let description = document.querySelector('tr.selected').children[1].textContent
		console.log('Id', id, 'Description', description)
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(MaterialDialogComponent, { data: { elements: this.data } })
		dialogRef.afterClosed().subscribe((result) => {
			console.info('Came back from the dialog:', result)
		})
	}

}