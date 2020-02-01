import { IndexInteractionService } from 'src/app/services/interaction.service';
import { Component, ViewChild } from '@angular/core'
import { ChildComponent } from './child.component'

export class Fruit {
    id: number
    description: string
    kingdom: string
    amount: number
    time: string
}

export class Transfer {
    time: string
    pickupPoint: string
    adults: string
    kids: string
    free: string
    total: string
    customer: string
    remarks: string
    destination: string
}

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentComponent {

    remarks: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et neque dolor. In hac habitasse platea dictumst. In id nisi id ex accumsan tincidunt. Praesent id tellus consectetur urna ultricies luctus.'

    fruits: Fruit[]
    selectedFruit: Fruit

    transfers: Transfer[]

    headerText: string = "This title came from the parent component"

    @ViewChild(ChildComponent) private varName: ChildComponent

    constructor(private _interactionService: IndexInteractionService) { }

    ngOnInit() {
        this.fruits = [
            { id: 4, description: 'Apples', amount: 7.6, kingdom: 'Plantae', time: '05:01' },
            { id: 18, description: 'Bananas', amount: 1.4, kingdom: 'Plantae', time: '11:50' },
            { id: 25, description: 'Bananas', amount: 1.4, kingdom: 'Plantae', time: '11:50' },
            { id: 6, description: 'Cherries', amount: 12.9, kingdom: 'Plantae', time: '00:05' },
            { id: 1, description: 'Jackfruit', amount: 1230.4, kingdom: 'Plantae', time: '00:10' },
            { id: 5, description: 'Lemons', amount: 21.4, kingdom: 'Plantae', time: '05:00' },
            { id: 2, description: 'Melons', amount: 210.4, kingdom: 'Plantae', time: '04:29' },
            { id: 7, description: 'Oranges', amount: 15.3, kingdom: 'Plantae', time: '21:00' },
            { id: 8, description: 'Oranges', amount: 15.3, kingdom: 'Plantae', time: '21:00' },
            { id: 3, description: 'Pineapples', amount: 10.4, kingdom: 'Plantae', time: '06:08' },
            { id: 9, description: 'Kumquat', amount: 10.4, kingdom: 'Plantae', time: '17:01' },
            { id: 10, description: 'Mangos', amount: 23.7, kingdom: 'Plantae', time: '21:00' },
            { id: 11, description: 'Kiwis', amount: 5.9, kingdom: 'Plantae', time: '20:00' },
            { id: 12, description: 'Passionfruit', amount: 1.9, kingdom: 'Plantae', time: '18:41' },
            { id: 13, description: 'Avocado', amount: 12.9, kingdom: 'Plantae', time: '16:20' },
            { id: 14, description: 'Guava', amount: 0.9, kingdom: 'Plantae', time: '14:19' },
            { id: 15, description: 'Strawberries', amount: 17.1, kingdom: 'Plantae', time: '09:30' },
            { id: 16, description: 'Grapes', amount: 30.9, kingdom: 'Plantae', time: '09:15' },
            { id: 17, description: 'Apricots', amount: 1.5, kingdom: 'Plantae', time: '13:20' },
            { id: 19, description: 'Blackberries', amount: 2.4, kingdom: 'Plantae', time: '12:10' },
            { id: 20, description: 'Apples', amount: 7.6, kingdom: 'Plantae', time: '05:01' },
            { id: 21, description: 'Cherries', amount: 13.4, kingdom: 'Plantae', time: '00:05' },
            { id: 22, description: 'Kumquat', amount: 12.4, kingdom: 'Plantae', time: '17:01' },
            { id: 23, description: 'Kumquat', amount: 110.4, kingdom: 'Plantae', time: '17:01' },
            { id: 24, description: 'Kumquat', amount: 10.4, kingdom: 'Plantae', time: '17:01' },
        ]
        this.transfers = [
            { time: '07:11', destination: 'BL', pickupPoint: 'GOLDEN MARE BARBATI / M.ROAD', adults: '5', kids: '0', free: '0', total: '5', remarks: 'GYG PAY ON THE BOAT', customer: 'CORFU CRUISES' },
            { time: '07:11', destination: 'BL', pickupPoint: 'GOLDEN MARE BARBATI / M.ROAD', adults: '5', kids: '0', free: '0', total: '5', remarks: 'GYG PAY ON THE BOAT', customer: 'CORFU CRUISES' },
            { time: '07:11', destination: 'BL', pickupPoint: 'GOLDEN MARE BARBATI / M.ROAD', adults: '5', kids: '0', free: '0', total: '5', remarks: 'GYG PAY ON THE BOAT', customer: 'CORFU CRUISES' },
            { time: '07:19', destination: 'BL', pickupPoint: 'SAN MARCO / MINI MARKET', adults: '2', kids: '0', free: '0', total: '2', remarks: '', customer: 'PANDIS TRAVEL-GOUVIA' },
            { time: '07:19', destination: 'BL', pickupPoint: 'SAN MARCO / MINI MARKET', adults: '2', kids: '0', free: '0', total: '2', remarks: '', customer: 'PANDIS TRAVEL-GOUVIA' },
            { time: '07:35', destination: 'BL', pickupPoint: 'DAPHNILA BAY / M.GATE', adults: '2', kids: '0', free: '0', total: '0', remarks: '2', customer: 'TUI HELLAS' },
            { time: '07:19', destination: 'BL', pickupPoint: 'SAN MARCO / MINI MARKET', adults: '2', kids: '0', free: '0', total: '2', remarks: '', customer: 'PANDIS TRAVEL-GOUVIA' },
            { time: '07:19', destination: 'BL', pickupPoint: 'SAN MARCO / MINI MARKET', adults: '2', kids: '0', free: '0', total: '2', remarks: '', customer: 'PANDIS TRAVEL-GOUVIA' },
            { time: '07:20', destination: 'BL', pickupPoint: 'IPSOS ΔΗΜΑΡΧΕΙΟ / MAIN ROAD', adults: '6', kids: '0', free: '0', total: '6', remarks: 'YIANNIS HTL', customer: 'CORFU CRUISES' },
            { time: '07:20', destination: 'BL', pickupPoint: 'IPSOS ΔΗΜΑΡΧΕΙΟ / MAIN ROAD', adults: '6', kids: '0', free: '0', total: '6', remarks: 'YIANNIS HTL', customer: 'CORFU CRUISES' },
            { time: '07:20', destination: 'BL', pickupPoint: 'IPSOS ΔΗΜΑΡΧΕΙΟ / MAIN ROAD', adults: '6', kids: '0', free: '0', total: '6', remarks: 'YIANNIS HTL', customer: 'CORFU CRUISES' },
            { time: '07:11', destination: 'BL', pickupPoint: 'DIELLAS MARKET / M.ROAD', adults: '2', kids: '0', free: '0', total: '2', remarks: '12', customer: 'C.T.S.' },
            { time: '07:20', destination: 'BL', pickupPoint: 'IPSOS ΔΗΜΑΡΧΕΙΟ / MAIN ROAD', adults: '6', kids: '0', free: '0', total: '6', remarks: 'YIANNIS HTL', customer: 'CORFU CRUISES' },
            { time: '07:35', destination: 'BL', pickupPoint: 'DAPHNILA BAY / M.GATE', adults: '2', kids: '0', free: '0', total: '0', remarks: '2', customer: 'TUI HELLAS' },
            { time: '07:11', destination: 'BL', pickupPoint: 'GOLDEN MARE BARBATI / M.ROAD', adults: '5', kids: '0', free: '0', total: '5', remarks: 'GYG PAY ON THE BOAT', customer: 'CORFU CRUISES' },
            { time: '07:35', destination: 'BL', pickupPoint: 'DAPHNILA BAY / M.GATE', adults: '2', kids: '0', free: '0', total: '0', remarks: '2', customer: 'TUI HELLAS' },
            { time: '09:44', destination: 'PA', pickupPoint: 'CAPO DI CORFU / M.GATE', adults: '5', kids: '0', free: '0', total: '5', remarks: 'PAY ON THE BOAT 105', customer: 'PANDIS TRAVEL KAVOS' },
            { time: '09:45', destination: 'BL', pickupPoint: 'TEX MEX / MAIN ROAD', adults: '2', kids: '0', free: '0', total: '2', remarks: 'GYG', customer: 'CORFU CRUISES' },
        ]
        this._interactionService.dataArray.subscribe(data => {
            console.log('Data from service', data)
        })
    }

    // T
    startTimer() {
        this.varName.startTimer()
    }

    // T
    checkFullNameChanges(event: any) {
        console.log('Event', event)
    }

    // T
    onSave() {
        console.log('Saving...')
    }

    // T
    onDelete() {
        console.log('Deleting...')
    }

    // Gets a fruit object from the child
    // and updates the local variable
    // which will be displayed in the template
    select(input: Fruit) {
        this.selectedFruit = input
    }

}
