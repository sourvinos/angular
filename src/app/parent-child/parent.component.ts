import { Component, ViewChild, OnInit } from '@angular/core';
import { ChildFromParentComponent } from './child.component';
import { HeaderComponent } from './header.component';

@Component({
    selector: 'parentToChild',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentToChildComponent {

    @ViewChild(ChildFromParentComponent) private varName: ChildFromParentComponent

    startTimer() {
        this.varName.startTimer()
    }

    headerText: string = "Title goes here"

    fullName: string = ''

    checkFullNameChanges(event: any) {
        console.log(event)
    }

    save() {
        console.log('Saving...')
    }

    delete() {
        console.log('Deleting...')
    }

}
