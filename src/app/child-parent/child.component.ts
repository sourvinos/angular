import { Component, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'childToParent',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildToParentComponent {

    @Output() greetEvent = new EventEmitter()
    name: string = 'Codevolution'

    // Child method that when called it emitts the @Output variable
    callParentGreet() {
        this.greetEvent.emit(this.name)
    }

}
