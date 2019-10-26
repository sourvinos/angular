import { employee } from './../models/employees';
import { Injectable } from '@angular/core';
import { of } from 'rxjs'

@Injectable({ providedIn: 'root' })

export class EmployeeService {

    employees: employee[] = [
        { id: 1, name: 'Mark', gender: 'Male', contactPreference: 'Email', email: 'mark@hotmail.com', dateOfBirth: new Date('10/25/1975'), department: '1', isActive: true, photoPath: 'assets/mark.png' },
        { id: 2, name: 'Pam', gender: 'Female', contactPreference: 'Email', email: 'pam@yahoo.com', dateOfBirth: new Date('01/05/1980'), department: '2', isActive: true, photoPath: 'assets/pam.png' },
        { id: 3, name: 'Julie', gender: 'Female', contactPreference: 'Email', email: 'julie@hotmail.com', dateOfBirth: new Date('05/05/1982'), department: '3', isActive: true, photoPath: 'assets/julie.png' }
    ]

    getEmployees() {
        return of(this.employees)
    }

    addEmployee(employee: employee) {
        this.employees.push(employee)
    }

}