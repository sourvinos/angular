import { Component, ViewChild, OnInit } from '@angular/core';
import { ChildFromParentComponent } from './child.component';

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

}
