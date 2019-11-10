import { photo } from './../models/photo';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { employee } from '../models/employees';
import { EmployeeService } from '../../services/employee.service';

@Injectable({ providedIn: 'root' })

// Prefetch data with resolver to avoid partial page update while waiting for the api to load the data
// Step 1 This class!
// Step 2 Add it to the routes modules
// Step 3 Modify the constructor of the list component and remove the service 
// Step 4 In the app component define the loader

export class EmployeeListResolverService implements Resolve<photo[]>{

    // albumId: number

    constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
        console.log('Inside constructor')
        // this.route.params.subscribe((params: Params) => { this.albumId = +params['albumId'] })
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<photo[]> {
        let albumId: number = null
        console.log('Route:', route)
        console.log('Album extract from url:', route.params.albumId)
        console.log('Integer:', parseInt(route.params.albumId))
        albumId = parseInt(route.params.albumId)
        console.log('Album Id:', albumId)
        console.log('Url:', albumId)
        return this.employeeService.getPhotos(albumId)
    }

}
// export class EmployeeListResolverService implements Resolve<employee[]>{

//     constructor(private employeeService: EmployeeService) { }

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<employee[]> {
//         return this.employeeService.getEmployees()
//     }

// }