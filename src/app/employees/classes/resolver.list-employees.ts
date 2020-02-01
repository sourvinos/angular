import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs'
import { EmployeeService } from './service.employees'
import { Employee } from './model.employee'

@Injectable({ providedIn: 'root' })

export class EmployeeListResolverService implements Resolve<Employee[]>{

    constructor(private employeeService: EmployeeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.employeeService.getAll()
    }

}