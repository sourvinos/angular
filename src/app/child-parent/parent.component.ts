import { SharedService } from './shared.service';
import { Component } from '@angular/core';

@Component({
    selector: 'parentFromChild',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentFromChildComponent {

    message: string = ''

    stringLookup: string = ''

    constructor(private sharedService: SharedService) {
        this.sharedService.changeEmitted.subscribe(text => { this.message = text });
    }

    // Parent method that will be called from the child
    // the 'name' is the parameter that is passed from the child
    greetEvent(name: string) {
        alert('Hello, ' + name)
    }

}
