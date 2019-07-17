import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'arrays',
	templateUrl: './arrays.component.html',
	styleUrls: ['./arrays.component.css']
})

export class ArraysComponent implements OnInit {

	base: IDestination[] = [{ id: 1, description: 'BL' }, { id: 2, description: 'BL' }, { id: 3, description: 'PA' }, { id: 4, description: 'AL' }, { id: 5, description: 'BL' }, { id: 6, description: 'AL' }]
	baseFiltered: IDestination[]
	criteria = ['BL', 'AL']

	constructor() { }

	ngOnInit() {
		console.log(this.base)
		this.baseFiltered = this.base.filter((x) => { return this.criteria.indexOf(x.description) !== -1 })
		console.log(this.baseFiltered)
	}

	isGreaterThan(value: number, v: number) {
		return value > v
	}

}

export interface IDestination {
	id: number
	description: string
}
