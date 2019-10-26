import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { employee } from '../models/employees';
import { EmployeeService } from './employee.service';

@Injectable({ providedIn: 'root' })

export class EmployeeListResolverService implements Resolve<employee[]>{

    constructor(private employeeService: EmployeeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<employee[]> {
        return this.employeeService.getEmployees()
    }

}