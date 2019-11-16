import { Component } from '@angular/core'
import { employee } from '../classes/model.employee'
import { EmployeeService } from '../classes/employee.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'list-employee',
    templateUrl: './list-employee.html',
    styleUrls: ['./list-employee.css']
})

export class EmployeeListComponent {

    employees: employee[]

    constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.employeeService.getEmployees().subscribe(result => {
            this.employees = result
        })
    }

    getEmployee(employee: employee) {
        this.router.navigate(['/employees/' + employee.id])
    }

}
