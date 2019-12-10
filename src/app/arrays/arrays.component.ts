import { Component, OnInit } from '@angular/core';

export class Destination {
	id: number
	description: string
}

export class Fruit {
	id: number
	description: string
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

	fruits: Fruit[] = [
		{ id: 1, description: 'Apples' },
		{ id: 2, description: 'Oranges' },
		{ id: 3, description: 'Figs' },
		{ id: 4, description: 'Mangos' },
		{ id: 5, description: 'Strawberries' },
	]

	destinations: Destination[] = [
		{ id: 1, description: 'Paxos' },
		{ id: 2, description: 'Corfu Town' },
		{ id: 3, description: 'Blue Lagoon' },
		{ id: 4, description: 'Erikousa' },
	]

	selectedFruits: Fruit[] = []
	selectedDestinations: Destination[] = []

	base: Destination[] = [
		{ id: 4, description: 'AL' },
		{ id: 6, description: 'AL' },
		{ id: 1, description: 'BL' },
		{ id: 2, description: 'BL' },
		{ id: 5, description: 'BL' },
		{ id: 3, description: 'PA' }]
	baseFiltered: Destination[]
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
		// console.log(this.base)
		this.baseFiltered = this.base.filter((x) => { return this.criteria.indexOf(x.description) !== -1 })
		// console.log(this.baseFiltered)
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
			// console.log('Adults: ' + n + ', Customer: ' + f, ' Pickup point: ' + g + ' Route: ' + e)
			this.flatPeople.push({ adults: n, customer: f, pickupPoint: g, route: e })
		}
		// console.log(this.flatPeople)
	}

	isGreaterThan(value: number, v: number) {
		return value > v
	}

	onSaveToLocalStorage() {
		let settings = {
			"fruits": JSON.stringify(this.selectedFruits),
			"destinations": JSON.stringify(this.selectedDestinations)
		}
		localStorage.setItem('settings', JSON.stringify(settings))
		// localStorage.setItem('fruits', JSON.stringify(this.selectedFruits))
		// localStorage.setItem('destinations', JSON.stringify(this.selectedDestinations))
	}

	onDisplayFruits() {
		// console.log(this.fruits)
	}

	/**
	 * Adds/removes the clicked item to/from the 'selected...' array
	 * 
	 * @param item // The list item that was clicked
	 * @param lookupArray // The array that holds the items with 'activeItem' class
	 */
	onToggleItem(item: any, lookupArray: string) {
		var element = document.getElementById(item.description)
		if (element.classList.contains('activeItem')) {
			for (var i = 0; i < eval(lookupArray).length; i++) {
				if (eval(lookupArray)[i] == item.description) {
					eval(lookupArray).splice(i, 1)
					i--
					element.classList.remove('activeItem')
					break
				}
			}
		} else {
			element.classList.add('activeItem')
			eval(lookupArray).push(item.description)
		}
	}

	onReadFromLocalStorage() {
		let settings = JSON.parse(localStorage.getItem('settings'))

		this.selectedFruits = JSON.parse(settings.fruits); this.addClassToElements(this.selectedFruits, 'fruit')
		this.selectedDestinations = JSON.parse(settings.destinations); this.addClassToElements(this.selectedDestinations, 'destination')
	}

	/**
	 * Add a class to every DOM element in the particular summary group (i.e. destination)
	 * that is found in the localStorage
	 * and has a class of 'className'
	 * @param array The array with the items that came from the localStorage
	 * @param className The name of the class for each group item 
	 */
	addClassToElements(array: any[], className: string) {
		// Store all the DOM elements with the particular class name (i.e. destination)
		let elements = document.querySelectorAll('.' + className)
		// Loop through each DOM element
		elements.forEach((element: HTMLElement) => {
			// If the array from the localStorage contains the current loop DOM element
			// Store its position
			let position = array.indexOf(element.innerHTML)
			if (position != -1) {
				document.getElementById(element.innerHTML).classList.add('activeItem')
			}
		})
	}

}

