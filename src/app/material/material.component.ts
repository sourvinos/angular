import { ElementsService } from './../services/elements.service.'
import { SelectionModel } from '@angular/cdk/collections'
import { Component, HostListener, OnInit } from '@angular/core'
import { MatDialog, MatTableDataSource, MatSnackBar } from '@angular/material'
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component'
import { EmployeeService } from '../employees/classes/service.employee'
import { FormControl, Validators } from '@angular/forms'

interface TableItem {
	name: string
}

@Component({
	selector: 'material',
	templateUrl: './material.component.html',
	styleUrls: ['./material.component.css']
})

export class MaterialComponent implements OnInit {

	employees = []
	elements = []

	tables: any[] = []

	emailFormControl = new FormControl('', [Validators.required, Validators.email,])
	userNameFormControl = new FormControl('', [Validators.required])

	// employeesDataSource: MatTableDataSource<TableItem> employeesSelection: SelectionModel<TableItem>
	// elementsDataSource: MatTableDataSource<TableItem> elementsSelection: SelectionModel<TableItem>

	constructor(private employeeService: EmployeeService, private elementService: ElementsService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

	ngOnInit(): void {
		// this.employeeService.getEmployees().subscribe((result) => {
		// 	// this.employeesDataSource = new MatTableDataSource<TableItem>(result)
		// 	// this.employeesSelection = new SelectionModel<TableItem>(false)
		// 	this.employees = result
		// })
		this.elementService.getElements().subscribe((result) => {
			// this.elementsDataSource = new MatTableDataSource<TableItem>(result)
			// this.elementsSelection = new SelectionModel<TableItem>(false)
			console.log(result)
			this.elements = result
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
		})
	}

	lookupTable(tableIndex: number, id: string, description: string, controlName: FormControl, currentFocus: string, nextFocus: string) {
		let lookupInput = controlName.value.toUpperCase()
		let lookupResults = this.tables[tableIndex].filter((item: { description: string }) => {
			return item.description.includes(lookupInput)
		})
		if (lookupResults.length > 0) this.openEmployeesDialog(lookupResults)
		// if (lookupResults.length > 0) this.openEmployeesDialog(id, description, lookupResults, currentFocus, nextFocus)
	}

	private arrayLookup(lookupArray: any[], givenField: FormControl) {
		console.log('arrayLookup() - Lookup into', lookupArray, 'Search for', givenField)
		for (let x of lookupArray) {
			if (x.description.toLowerCase() == givenField.value.toLowerCase()) {
				return true
			}
		}
	}

	// T
	updateMe(lookupArray: any[], e: { target: { value: any } }): void {

		console.log('updateMe() - Search for', e.target.value, 'Lookup into', lookupArray)

		let name = e.target.value

		let filteredMountains = []
		lookupArray.filter(mountain => {
			if (mountain.name.toUpperCase().includes(name.toUpperCase()))
				filteredMountains.push(mountain)
		})

		console.log('Filtered mountains', filteredMountains)

		if (filteredMountains.length > 0) this.openEmployeesDialog(filteredMountains)

	}

	private openEmployeesDialog(lookupResults: any[]): void {
		let dialogRef = this.dialog.open(MaterialDialogComponent, {
			data: {
				columns: ['id', 'name', 'dateOfBirth', 'salary'],
				fields: ['Id', 'First name', 'Date of birth', 'Salary'],
				align: ['center', 'left', 'center', 'right'],
				format: ['', '', 'date', 'decimal'],
				records: lookupResults
			}
		})
		dialogRef.afterClosed().subscribe((result) => {
			console.info('Came back from the dialog:')
		})
	}

	selectAll() {
		event.stopPropagation()
	}

}

