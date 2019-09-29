import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'data-binging',
    templateUrl: './data-binging.component.html',
    styleUrls: ['./data-binging.component.css']
})

export class DataBindingComponent {

    documentTitle: string = 'Data binding'
    imageUrl: string = 'https://picsum.photos/200'
    counter: number = 0
    userName: string = ''
    private _userRole: string = ''

    constructor() { }

    get userRole(): string {
        return this._userRole
    }

    set userRole(value: string) {
        this._userRole = value
    }

    addOne() {
        this.counter += 1
    }

    resetCounter() {
        this.counter = 0
    }

    checkUserName(value: string) {
        if (value === 'Sourvinos') {
            this.userName = value
            alert(`Hello, ${this.userName}!`)
        }
    }

}
