import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './service.employee';
import { employee } from './model.employee';

@Injectable({ providedIn: 'root' })

export class EmployeeListResolverService implements Resolve<employee[]>{

    constructor(private employeeService: EmployeeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<employee[]> {
        return this.employeeService.getEmployees()
    }

}