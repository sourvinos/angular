import { Component, OnInit } from '@angular/core';
import { employee } from './models/employees';

@Component({
    selector: 'app-list-employees',
    templateUrl: './list-employees.component.html',
    styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

    employees: employee[] = [
        { id: 1, name: 'Mark', gender: 'Male', contactPreference: 'Email', email: 'mark@hotmail.com', dateOfBirth: new Date('10/25/1975'), department: 'IT', isActive: true, photoPath: 'assets/mark.png' },
        { id: 2, name: 'Pam', gender: 'Female', contactPreference: 'Email', email: 'pam@yahoo.com', dateOfBirth: new Date('01/05/1980'), department: 'HR', isActive: true, photoPath: 'assets/pam.png' },
        { id: 3, name: 'Julie', gender: 'Female', contactPreference: 'Email', email: 'julie@hotmail.com', dateOfBirth: new Date('05/05/1982'), department: 'Sales', isActive: true, photoPath: 'assets/julie.png' }
    ]

    constructor() { }

    ngOnInit() { }

}
