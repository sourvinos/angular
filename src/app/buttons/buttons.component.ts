import { AfterViewInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EmployeeService } from '../employees/services/employee.service';
import { employee } from '../employees/models/employees';
import { json } from 'body-parser';

interface TableItem {
	name: string;
}

@Component({
	selector: 'buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.css']
})

export class ButtonsComponent implements OnInit, AfterViewInit {

	// @ViewChild(MatPaginator) paginator1: MatPaginator;
	// @ViewChild(MatSort) sort1: MatSort;

	dataSource: MatTableDataSource<TableItem>;
	selection: SelectionModel<TableItem>;

	// columns = ['position', 'name']
	columns = ['id', 'name']


	constructor(private employeeService: EmployeeService) { }

	ngOnInit(): void {

		// let data = [];

		// data.push(
		// 	{ id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		// 	{ id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		// 	{ id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		// 	{ id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		// 	{ id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
		// 	{ id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
		// 	{ id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
		// 	{ id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
		// 	{ id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
		// 	{ id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
		// )

		// console.log('Elements before', data)
		// data.splice(0, data.length)

		this.employeeService.getEmployees().subscribe((result) => {
			// console.log('Employees JSON', JSON.stringify(result))
			// console.log('Employees', result)
			// data.push(result)
			// data = result
			// this.dataSource = new MatTableDataSource<TableItem>(data);
			this.dataSource = new MatTableDataSource<TableItem>(result);
			this.selection = new SelectionModel<TableItem>(false);
			// console.log('Elements after', data)
			console.log('Elements after', result)
		})
		// document.getElementById('dataTable').focus()
	}

	ngAfterViewInit(): void {
		// this.dataSource = new MatTableDataSource<TableItem>(this.data);
		// this.selection = new SelectionModel<TableItem>(false);
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

}