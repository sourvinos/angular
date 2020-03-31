import { EmployeeService } from '../classes/employee.service'
import { Component, OnInit } from '@angular/core'
import { Employee } from '../classes/model.employee'
import { Router, ActivatedRoute } from '@angular/router'
import { ResolvedEmployeeList } from '../classes/resolved-employeeList.model'

@Component({
    selector: 'list-employee',
    templateUrl: './list-employee.html',
    styleUrls: ['./list-employee.css']
})

export class EmployeeListComponent implements OnInit {

    employees: Employee[]

    headers = ['Id', 'Name']
    widths = ['', '', '200px']
    visibility = ['none', '']
    justify = ['center', 'left']
    fields = ['id', 'name']
    error: string = ''

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        const resolvedData: Employee[] | string = this.activatedRoute.snapshot.data['employeeList']
        if (Array.isArray(resolvedData)) {
            this.employees = resolvedData
        } else {
            this.error = resolvedData
        }
    }

    getEmployee(id: number) {
        this.router.navigate(['../', id], {
            relativeTo: this.activatedRoute
        })
    }

}
