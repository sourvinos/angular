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
    selectedFruit: Fruit

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
