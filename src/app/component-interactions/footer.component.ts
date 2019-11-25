import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent {

    @Output() saveEvent = new EventEmitter()
    @Output() deleteEvent = new EventEmitter()

    save() {
        this.saveEvent.emit()
    }

    delete() {
        this.deleteEvent.emit()
    }

}
