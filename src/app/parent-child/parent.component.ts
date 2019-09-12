import { AfterViewInit } from '@angular/core';
import { ChildFromParentComponent } from './child.component';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'parentToChild',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentToChildComponent {
    // Part 1: This variable will be passed to the child component
    userLoggedIn: boolean = false

    toggleLoginStatus() {
        this.userLoggedIn = !this.userLoggedIn
    }

    isThisDisabled() {
        return this.userLoggedIn
    }
    // End of part 1
}
