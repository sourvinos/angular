import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildFromParentComponent implements OnChanges {

    // Part 1
    // The loggedIn variable is expecting a value from the parent
    @Input() loggedIn: boolean
    // End of part 1

    // Part 2
    // Use getter and setter to achive the same result as in Part 1
    // but also the setter executes more lines of code
    // such as display a message 
    // private _loggedIn: boolean
    // message: string = ''

    // get loggedIn() {
    //     return this._loggedIn
    // }

    // @Input()
    // set loggedIn(value: boolean) {
    //     this._loggedIn = value
    //     this.message = value ? 'Welcome back!' : 'Please login to continue!'
    // }
    // End of part 2

    // Part 3
    // Use ngOnChanges to keep track of input variables
    // The loggedIn variable is expecting a value from the parent
    // Works only with child components
    // Also, code can execute on changes
    // @Input() loggedIn: boolean
    // message: string = ''

    ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes)
        // this.message = changes.loggedIn.currentValue ? 'Welcome back!' : 'Please login to continue'
    }
    // End of part 3

    // Part 4
    // Allow the parent component to access properties of the child component
    // name = 'John'

    // greetMe() {
    // alert(`Hello, ${this.name}`)
    // }
    // End of part 4

}
