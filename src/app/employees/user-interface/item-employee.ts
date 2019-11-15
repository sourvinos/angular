import { Component, Input, Output, EventEmitter } from '@angular/core';
import { employee } from '../classes/model.employee';

@Component({
    selector: 'item-employee',
    templateUrl: './item-employee.html',
    styleUrls: ['./item-employee.css']
})

export class EmployeeItemComponent {

    @Input() employee: employee
    @Output() notify: EventEmitter<string> = new EventEmitter<string>()

    displayName() {
        this.notify.emit(this.employee.name)
    }

}
