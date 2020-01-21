import { Component, Input } from '@angular/core'
import { Employee } from '../classes/model.employee'

@Component({
    selector: 'item-employee',
    templateUrl: './item-employee.html',
    styleUrls: ['./item-employee.css']
})

export class EmployeeItemComponent {

    @Input() employee: Employee

}
