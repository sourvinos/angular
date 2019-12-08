import { Component, OnInit } from '@angular/core'

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

	base: IDestination[] = [{ id: 1, description: 'BL' }, { id: 2, description: 'BL' }, { id: 3, description: 'PA' }, { id: 4, description: 'AL' }, { id: 5, description: 'BL' }, { id: 6, description: 'AL' }]
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

}

export interface IDestination {
	id: number
	description: string
}
