import { SharedService } from './shared.service';
import { Component } from '@angular/core';

@Component({
    selector: 'parentFromChild',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentFromChildComponent {

    message: string = ''

    constructor(private sharedService: SharedService) {
        sharedService.changeEmitted$.subscribe(text => { this.message = text });
    }

    // Parent method that will be called from the child
    // the 'name' is the parameter that is passed from the child
    // greet(name: string) {
    //     alert('Hello, ' + name)
    // }

}
