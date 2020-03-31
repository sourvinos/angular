import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { EmployeeService } from './employee.service'
import { ResolvedEmployeeList } from './resolved-employeeList.model'
import { Employee } from './model.employee'

@Injectable({ providedIn: 'root' })

export class EmployeeListResolver implements Resolve<Employee[] | string> {

    constructor(private employeeService: EmployeeService) { }

    resolve() {
        return this.employeeService.getAll().pipe(
            catchError((err: string) => of(err))
        )
    }

}
