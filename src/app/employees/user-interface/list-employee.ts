import { EmployeeService } from '../classes/service.employees';
import { Component, OnInit } from '@angular/core'
import { Employee } from '../classes/model.employee'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'list-employee',
    templateUrl: './list-employee.html',
    styleUrls: ['./list-employee.css']
})

export class EmployeeListComponent implements OnInit {

    employees: Employee[]

    constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.employeeService.getAll().subscribe(results => {
            console.log(results)
            this.employees = results
        })
    }

    getEmployee(id: number) {
        this.router.navigate(['../', id], {
            relativeTo: this.activatedRoute
        })
    }

}
