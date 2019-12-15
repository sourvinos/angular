import { NavigationCancel } from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

export class Destination {
	id: number
	description: string
}

export class Fruit {
	id: number
	description: string
}

class FlatPeople {
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

export class ArraysComponent implements OnInit, AfterViewInit {

	@ViewChildren('fruity') myDiv: QueryList<ElementRef<HTMLLIElement>>

	elements: any

	progress: string = ''
	settings: any
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

	flatPeople: FlatPeople[] = []

	ngOnInit() {
		this.baseFiltered = this.base.filter((x) => { return this.criteria.indexOf(x.description) !== -1 })
		this.settings = JSON.parse(localStorage.getItem('settings'))
		this.selectedFruits = JSON.parse(this.settings.fruits)
		// this.onReadFromLocalStorage()
		// this.addClassToElements(this.selectedDestinations, 'destination')
		// this.addClassToElements()
	}

	ngAfterViewInit() {
		// this.onReadFromLocalStorage()
		this.addClassToElements()
		// console.log('myDiv', this.myDiv);
		// this.elements = this.myDiv.toArray()
		// console.log('elements', this.elements);
		// this.elements.forEach(element => {
		// 	console.log(element.nativeElement.classList)
		// 	element.nativeElement.classList.add('tsito')
		// });
	}

	flattenArray() {
		this.baseFiltered = this.base.filter((x) => { return this.criteria.indexOf(x.description) !== -1 })
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
			this.flatPeople.push({ adults: n, customer: f, pickupPoint: g, route: e })
		}
	}

	onSaveToLocalStorage() {
		let settings = {
			"fruits": JSON.stringify(this.selectedFruits),
			"destinations": JSON.stringify(this.selectedDestinations)
		}
		localStorage.removeItem('settings')
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

	/**
	 * Reads data from the localStorage
	 * Populates the two arrays
	 * Adds an 'activeItem' class to the DOM elements
	 */
	onReadFromLocalStorage() {
		console.log('Reading localStorage')
		let settings = JSON.parse(localStorage.getItem('settings'))
		if (settings != null) {
			this.selectedFruits = JSON.parse(settings.fruits)
			console.log('Selected fruits', this.selectedFruits)
			this.addClassToElements()
			// this.selectedDestinations = JSON.parse(settings.destinations)
			// console.log('Selected destinations', this.selectedDestinations)
			// this.addClassToElements(this.selectedDestinations, 'destination')
		}
	}

	/**
	 * Add a class to every DOM element in the particular summary group (i.e. destination)
	 * that is found in the localStorage
	 * and has a class of 'className'
	 * @param array The array with the items that came from the localStorage
	 * @param className The name of the class for each group item 
	 */
	//  addClassToElements(array: any[], className: string) {
	addClassToElements() {

		console.log('fruits from localStorage', this.selectedFruits)
		this.elements = this.myDiv.toArray()
		this.elements.forEach(element => {
			console.log('DOM Element', element.nativeElement.innerHTML)
			let position = this.selectedFruits.indexOf(element.nativeElement.innerHTML)
			console.log(position)
			if (position != -1) {
				element.nativeElement.classList.add('activeItem')
			}
		})
	}

}
