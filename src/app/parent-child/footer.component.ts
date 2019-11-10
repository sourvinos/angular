import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    @Output() saveEvent = new EventEmitter()
    @Output() deleteEvent = new EventEmitter()

    @Output() events = new EventEmitter()

    constructor() { }

    ngOnInit() { }

    save() {
        this.saveEvent.emit()
    }

    delete() {
        this.deleteEvent.emit()
    }

}
