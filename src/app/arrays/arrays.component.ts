import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'arrays',
	templateUrl: './arrays.component.html',
	styleUrls: ['./arrays.component.css']
})

export class ArraysComponent implements OnInit {

	base = ['AL', 'PA', 'BL', 'BL', 'PA', 'PA', 'PA', 'BL', 'BL', 'AL']
	baseFiltered = []
	criteria = ['BL']

	constructor() { }

	ngOnInit() {
		this.baseFiltered = this.base.filter((x) => { return this.criteria.indexOf(x) !== -1 })
	}

	isGreaterThan(value: number, v: number) {
		return value > v
	}

}
