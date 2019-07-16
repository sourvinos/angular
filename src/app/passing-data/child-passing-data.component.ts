import { User } from '../models/user';
import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'child-passing-data',
    templateUrl: './child-passing-data.component.html',
    styleUrls: ['./child-passing-data.component.css']
})

export class ChildPassingDataComponent implements OnInit {

    // On the master element 'name' is the parameter name
    // Username is the alias that will be used inside the child component
    @Input('name') 'userName': string
    // Use and object
    @Input('user') user: User

    constructor() { }

    ngOnInit() {
        this.userName = 'this.is.the.username'

        this.user = {
            name: 'John Doe',
            email: 'johndoe@hotmail.com',
            phone: 5552789,
            topic: 'Angular',
            level: 'Intermediate',
            timePreference: true
        }
    }

}
