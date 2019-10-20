import { employee } from './models/employees';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { department } from './models/department';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {

    isPreviewPhoto: boolean = false

    employee: employee = {
        id: 0,
        name: 'John Doe',
        gender: 'male',
        email: 'johndoe@email.com',
        phoneNumber: '1234 567 890',
        contactPreference: 'email',
        isActive: true,
        department: '2',
        dateOfBirth: new Date(2018, 11, 24),
        photoPath: 'assets/mark.png'
    }

    departments: department[] = [
        { id: 1, name: 'IT' },
        { id: 2, name: 'Sales' },
        { id: 3, name: 'Human resources' },
        { id: 4, name: 'Marketing' }
    ]

    constructor() { }

    ngOnInit() { }

    saveEmployee(employee: employee) {
        console.log(employee)
    }

    onShowPreview() {
        this.isPreviewPhoto = !this.isPreviewPhoto
    }

}
