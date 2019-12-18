import { IndexInteractionService } from 'src/app/services/interaction.service';
import { Component, ViewChild } from '@angular/core'
import { ChildComponent } from './child.component'
import { getLocaleEraNames } from '@angular/common'

export class Fruit {
    id: number
    description: string
    kingdom: string
    amount: number
    remarks: string
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

    headerText: string = "This title came from the parent component"

    @ViewChild(ChildComponent) private varName: ChildComponent

    constructor(private _interactionService: IndexInteractionService) { }

    ngOnInit() {
        this.fruits = [
            { id: 1, description: 'Jackfruit', amount: 1230.4, kingdom: 'Plantae', remarks: this.remarks },
            { id: 2, description: 'Cherries', amount: 1234.4, kingdom: 'Plantae', remarks: this.remarks },
            { id: 3, description: 'Kumquat', amount: 10.4, kingdom: 'Plantae', remarks: this.remarks },
            { id: 10, description: 'Melons', amount: 210.4, kingdom: 'Plantae', remarks: this.remarks },
            { id: 11, description: 'Pineapples', amount: 10.4, kingdom: 'Plantae', remarks: this.remarks },
            { id: 12, description: 'Apples', amount: 7.6, kingdom: 'Plantae', remarks: this.remarks },
            { id: 15, description: 'Lemons', amount: 21.4, kingdom: 'Plantae', remarks: this.remarks },
            { id: 22, description: 'Oranges', amount: 15.3, kingdom: 'Plantae', remarks: this.remarks },
            { id: 31, description: 'Mangos', amount: 23.7, kingdom: 'Plantae', remarks: this.remarks },
            { id: 47, description: 'Kiwis', amount: 5.9, kingdom: 'Plantae', remarks: this.remarks },
            { id: 48, description: 'Passionfruit', amount: 1.9, kingdom: 'Plantae', remarks: this.remarks },
            { id: 49, description: 'Avocado', amount: 12.9, kingdom: 'Plantae', remarks: this.remarks },
            { id: 50, description: 'Guava', amount: 0.9, kingdom: 'Plantae', remarks: this.remarks },
            { id: 56, description: 'Strawberries', amount: 17.1, kingdom: 'Plantae', remarks: this.remarks },
            { id: 69, description: 'Grapes', amount: 30.9, kingdom: 'Plantae', remarks: this.remarks },
            { id: 71, description: 'Apricots', amount: 1.5, kingdom: 'Plantae', remarks: this.remarks },
            { id: 72, description: 'Bananas', amount: 1.4, kingdom: 'Plantae', remarks: this.remarks },
            { id: 73, description: 'Blackberries', amount: 2.4, kingdom: 'Plantae', remarks: this.remarks },
        ]
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
