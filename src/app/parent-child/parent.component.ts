import { Component, ViewChild } from '@angular/core';
import { ChildFromParentComponent } from './child.component';

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentToChildComponent {

    fruits: string[]
    selectedFruit: string = 'No selection yet'

    headerText: string = "This title came from the parent component"

    @ViewChild(ChildFromParentComponent) private varName: ChildFromParentComponent

    ngOnInit() {
        console.log('Init on parent initialized')
        this.fruits = ['Apples', 'Oranges', 'Strawberries', 'Grapes', 'Mangos', 'Kiwis']
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
