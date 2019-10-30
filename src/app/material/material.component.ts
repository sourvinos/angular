import { ElementsService } from './../services/elements.service.';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material';
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component';
import { EmployeeService } from '../services/employee.service';

interface TableItem {
	name: string;
}

@Component({
	selector: 'material',
	templateUrl: './material.component.html',
	styleUrls: ['./material.component.css']
})

export class MaterialComponent implements OnInit {

	employees = []
	elements = []

	employeesDataSource: MatTableDataSource<TableItem>; employeesSelection: SelectionModel<TableItem>;
	elementsDataSource: MatTableDataSource<TableItem>; elementsSelection: SelectionModel<TableItem>;


	constructor(private employeeService: EmployeeService, private elementService: ElementsService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((result) => {
			this.employeesDataSource = new MatTableDataSource<TableItem>(result);
			this.employeesSelection = new SelectionModel<TableItem>(false);
			this.employees = result
		})
		this.elementService.getElements().subscribe((result) => {
			this.elementsDataSource = new MatTableDataSource<TableItem>(result);
			this.elementsSelection = new SelectionModel<TableItem>(false);
			this.elements = result
		})
	}

	openEmployeesDialog(): void {
		let dialogRef = this.dialog.open(MaterialDialogComponent, {
			data: {
				headers: ['id', 'name', 'gender'],
				records: this.employees
			}
		})
		dialogRef.afterClosed().subscribe((result) => {
			console.info('Came back from the dialog:', result)
		})
	}

	openElementsDialog(): void {
		let dialogRef = this.dialog.open(MaterialDialogComponent, {
			data: {
				headers: ['name', 'atomicNumber'],
				records: this.elements
			}
		})
		dialogRef.afterClosed().subscribe((result) => {
			console.info('Came back from the dialog:', result)
		})
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}

}

