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

	data = [];
	columns = ['id', 'name']

	dataSource: MatTableDataSource<TableItem>;
	selection: SelectionModel<TableItem>;

	constructor(private employeeService: EmployeeService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((result) => {
			this.dataSource = new MatTableDataSource<TableItem>(result);
			this.selection = new SelectionModel<TableItem>(false);
			this.data = result
		})
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(MaterialDialogComponent, { data: { myEmployees: this.data } })
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

