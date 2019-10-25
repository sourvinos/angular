import { Component, Input } from '@angular/core';
import { employee } from './models/employees';

@Component({
    selector: 'app-employee-item',
    templateUrl: './employee-item.component.html',
    styleUrls: ['./employee-item.component.css']
})

export class EmployeeItemComponent {

    @Input() employee: employee

}
