import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

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

	// #region Init

	@ViewChildren('fruitsList') fruitsList: QueryList<any>
	@ViewChildren('destinationsList') destinationsList: QueryList<ElementRef<HTMLLIElement>>

	elements: any

	progress: string = ''
	settings: any = ''
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

	localStorageFruits: Fruit[] = []
	localStorageDestinations: Destination[] = []

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

	// #endregion

	ngOnInit() {
		this.baseFiltered = this.base.filter((x) => { return this.criteria.indexOf(x.description) !== -1 })
		this.readFromLocalStorage()
		setTimeout(() => {
			this.selectListItems(this.fruitsList, this.localStorageFruits)
			this.selectListItems(this.destinationsList, this.localStorageDestinations)
		}, 1000);
	}

	ngAfterViewInit() {
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

	/**
	 * Caller: Template - onToggleItem()
 	 * Description:
 	 * 		Toggles the 'activeItem' class for the clicked item
 	 * 		Adds/removes the clicked item to/from the relevant array
 	 * 		Clears the localStorage
	 * 		Saves all arrays to the localStorage
	 * 
	 * @param item // The element that was clicked
 	 * @param lookupArray // The array that holds the items with 'activeItem' class
 	 */
	onToggleItem(item: any, lookupArray: any[]) {
		this.toggleActiveClass(item)
		this.updateArray(item, lookupArray)
		this.clearLocalStorage()
		this.updateLocalStorage()
	}

	/**
	 * Caller: Class - onToggleItem()
	 * Description: Clears settings from localStorage
	 */
	private clearLocalStorage() {
		localStorage.removeItem('settings')
	}

	/**
	 * Caller: Class - ngOnInit()
	 * Description: Reads from localStorage and populates arrays
	 */
	private readFromLocalStorage() {
		console.log('readFromLocalStorage()')
		this.settings = JSON.parse(localStorage.getItem('settings'))
		if (this.settings != null) {
			this.localStorageFruits = JSON.parse(this.settings.fruits)
			this.localStorageDestinations = JSON.parse(this.settings.destinations)
			console.log(this.localStorageFruits, this.localStorageDestinations)
		}
	}

	/**
	 * Caller: Class - ngAfterViewInit()
	 * Description: Adds 'activeItem' class to the DOM list elements that are found in the localStorage
	 * 
	 * @param listItems 
	 * @param localStorageArrayName
	 */
	private selectListItems(listItems: QueryList<any>, localStorageArrayName: any[]) {
		listItems.toArray().forEach(element => {
			let position = localStorageArrayName.indexOf(element.nativeElement.innerText)
			if (position != -1) {
				element.nativeElement.classList.add('activeItem')
			} else {
				element.nativeElement.classList.remove('activeItem')
			}
		})
	}

	/**
	 * Caller: Template - onToggleItem()
 	 * Description: Toggles the activeItem class for the clicked item
 	 * 
 	 * @param item 
 	 */
	private toggleActiveClass(item: { description: string; }) {
		document.getElementById(item.description).classList.toggle('activeItem')
	}

	/**
	 * Caller: Class - onToggleItem()
	 * Description: Adds / removes the selected item from the array
	 * 
	 * @param item 
	 * @param lookupArray 
	 */
	private updateArray(item: { description: any; }, lookupArray: any[]) {
		let position = lookupArray.indexOf(item.description)
		if (position == -1) {
			lookupArray.push(item.description)
		} else {
			lookupArray.splice(position, 1)
		}
	}

	/**
	 * Caller: Class - onToggleItem()
	 * Description: Updates the localStorage with the arrays
	 */
	private updateLocalStorage() {
		let settings = {
			"fruits": JSON.stringify(this.localStorageFruits),
			"destinations": JSON.stringify(this.localStorageDestinations)
		}
		localStorage.setItem('settings', JSON.stringify(settings))
	}

}
