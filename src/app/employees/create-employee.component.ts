import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {

    fullName: string = ''
    email: string = ''
    gender: string = 'male'
    phone: string = ''
    contactPreference: string = 'email'
    isActive: boolean = true

    constructor() { }

    ngOnInit() { }

    saveEmployee(empForm: NgForm) {
        console.log(empForm.value)
    }

}
