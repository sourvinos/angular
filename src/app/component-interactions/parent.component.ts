import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

export class Fruit {
    id: number
    description: string
    amount: number
}

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentComponent {

    fruits: Fruit[]
    selectedFruit: string = 'No selection yet'

    headerText: string = "This title came from the parent component"

    @ViewChild(ChildComponent) private varName: ChildComponent

    ngOnInit() {
        this.fruits = [
            { id: 12, description: 'Apples', amount: 7.6 },
            { id: 22, description: 'Oranges', amount: 15.3 },
            { id: 31, description: 'Mangos', amount: 23.7 },
            { id: 47, description: 'Kiwis', amount: 5.9 },
            { id: 56, description: 'Strawberries', amount: 17.1 },
            { id: 69, description: 'Grapes', amount: 30.9 }
        ]
    }

    startTimer() {
        this.varName.startTimer()
    }

    checkFullNameChanges(event: any) {
        console.log('Event', event)
    }

    save() {
        console.log('Saving...')
    }

    delete() {
        console.log('Deleting...')
    }

    select(input: any) {
        this.selectedFruit = input
        console.log(this.selectedFruit)
    }

}
