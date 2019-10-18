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

    fullName: string = ''
    email: string = ''
    gender: string = 'male'
    phone: string = ''
    contactPreference: string = 'email'
    isActive: boolean = true
    department: string = '2'
    dateOfBirth: Date
    photoPath: string

    departments: department[] = [
        { id: 1, name: 'IT' },
        { id: 2, name: 'Sales' },
        { id: 3, name: 'Human resources' },
        { id: 4, name: 'Marketing' }
    ]

    constructor() { }

    ngOnInit() { }

    saveEmployee(empForm: NgForm) {
        console.log(empForm.value)
    }

    onShowPreview() {
        this.isPreviewPhoto = !this.isPreviewPhoto
    }

}
