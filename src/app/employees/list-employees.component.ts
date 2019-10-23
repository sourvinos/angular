import { Component, OnInit } from '@angular/core';
import { employee } from './models/employees';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'app-list-employees',
    templateUrl: './list-employees.component.html',
    styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

    employees: employee[]

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        this.employees = this.employeeService.getEmployees()
    }

}
