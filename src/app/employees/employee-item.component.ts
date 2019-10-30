import { Component, Input, Output, EventEmitter } from '@angular/core';
import { employee } from './models/employees';

@Component({
    selector: 'app-employee-item',
    templateUrl: './employee-item.component.html',
    styleUrls: ['./employee-item.component.css']
})

export class EmployeeItemComponent {

    @Input() employee: employee
    @Output() notify: EventEmitter<string> = new EventEmitter<string>()

    displayName() {
        this.notify.emit(this.employee.name)
    }

}
