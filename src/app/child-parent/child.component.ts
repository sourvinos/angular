import { SharedService } from './shared.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildToParentComponent {

    constructor(private sharedService: SharedService) { }

    @Output() greetEvent = new EventEmitter()
    searchString: string = 'Codevolution'

    // Child method that when called it emitts the @Output variable
    doSomething() {
        this.greetEvent.emit(this.searchString)
    }

    updateParent() {
        this.sharedService.emitChange('I came from below!')
    }

}
