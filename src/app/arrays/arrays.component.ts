import { department } from './../employees/classes/model.department';
import { Component, OnInit, ElementRef } from '@angular/core'

export class Fruit {
	name: string
}

class Dummy {
	adults: number
	customer: string
	pickupPoint: string
	route: string
}

@Component({
	selector: 'arrays',
	templateUrl: './arrays.component.html',
	styleUrls: ['./arrays.component.css']
})

export class ArraysComponent implements OnInit {

	selectFruit(event: any, el: ElementRef) {
		console.log(event, el)
		document.getElementById('Apples').classList.add('selected')
		document.getElementById('Mangos').classList.add('selected')
	}

	fruits: Fruit[] = [
		{ name: 'Apples' },
		{ name: 'Oranges' },
		{ name: 'Figs' },
		{ name: 'Mangos' },
		{ name: 'Strawberries' },
	]

	base: IDestination[] = [
		{ id: 4, description: 'AL' },
		{ id: 6, description: 'AL' },
		{ id: 1, description: 'BL' },
		{ id: 2, description: 'BL' },
		{ id: 5, description: 'BL' },
		{ id: 3, description: 'PA' }]
	baseFiltered: IDestination[]
	criteria = ['BL', 'AL']

	transfers = [
		{
			adults: 2,
			customer: {
				description: 'Jane Smith'
			},
			pickupPoint: {
				description: 'Park',
				route: {
					description: 'Nisaki'
				},
				time: '08:40'
			}
		},
	]

	flatPeople: Dummy[] = []

	ngOnInit() {
		console.log(this.base)
		this.baseFiltered = this.base.filter((x) => { return this.criteria.indexOf(x.description) !== -1 })
		console.log(this.baseFiltered)
		for (var {
			adults: n,
			customer: {
				description: f
			},
			pickupPoint: {
				description: g,
				route: {
					description: e
				} }
		} of this.transfers) {
			console.log('Adults: ' + n + ', Customer: ' + f, ' Pickup point: ' + g + ' Route: ' + e)
			this.flatPeople.push({ adults: n, customer: f, pickupPoint: g, route: e })
		}
		console.log(this.flatPeople)
	}

	isGreaterThan(value: number, v: number) {
		return value > v
	}

	onSaveToLocalStorage() {
		let filteredFruits: Fruit[] = []
		this.fruits.filter(fruit => {
			if (fruit.name.includes('a'))
				filteredFruits.push(fruit)
		})

		console.log('Filtered fruits', filteredFruits)
		localStorage.setItem('fruits', JSON.stringify(filteredFruits))
	}

	onReadFromLocalStorage() {
		console.log(JSON.parse(localStorage.getItem('fruits')))
	}

	onDisplayFruits() {
		console.log(this.fruits)
	}

}

export interface IDestination {
	id: number
	description: string
}
