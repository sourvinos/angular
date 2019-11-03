import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { employee } from '../employees/models/employees';

@Injectable({ providedIn: 'root' })

export class EmployeeService {

    employees: employee[] = [
        { id: 1, name: 'Mark', gender: 'Male', contactPreference: 'Email', email: 'mark@hotmail.com', dateOfBirth: '1975/01/05', department: '1', isActive: true, photoPath: 'assets/mark.png', age: '12.6' },
        { id: 2, name: 'Pam', gender: 'Female', contactPreference: 'Email', email: 'pam@yahoo.com', dateOfBirth: '1980/02/05', department: '2', isActive: true, photoPath: 'assets/pam.png', age: '19.6' },
        { id: 3, name: 'Julie', gender: 'Female', contactPreference: 'Email', email: 'julie@hotmail.com', dateOfBirth: '1970/06/07', department: '3', isActive: true, photoPath: 'assets/julie.png', age: '11.9' },
        { id: 4, name: 'Lisa', gender: 'Female', contactPreference: 'Email', email: 'lisa@hotmail.com', dateOfBirth: '2001/12/01', department: '1', isActive: true, photoPath: 'assets/liza.png', age: '12.0' }
    ]

    getEmployees() {
        return of(this.employees).pipe(delay(0))
    }

    addEmployee(employee: employee) {
        this.employees.push(employee)
    }

}