import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { employee } from '../models/employees';
import { EmployeeService } from './employee.service';

@Injectable({ providedIn: 'root' })

// Prefetch data with resolver to avoid partial page update while waiting for the api to load the data
// Step 1
// Step 2 Add it to the routes modules
// Step 3 Modify the constructor of the list component and remove the service 
// Step 4 In the app component define the loader

export class EmployeeListResolverService implements Resolve<employee[]>{

    constructor(private employeeService: EmployeeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<employee[]> {
        return this.employeeService.getEmployees()
    }

}