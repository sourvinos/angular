import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EmployeeService } from './employee.service'
import { Employee } from './model.employee'

@Injectable({ providedIn: 'root' })

export class EmployeeListResolver implements Resolve<Employee[]>{

    constructor(private employeeService: EmployeeService) { }

    resolve() {
        return this.employeeService.getAll()
    }

}