import { employee } from './models/employees';
import { Component, OnInit } from '@angular/core';
import { department } from './models/department';
import { EmployeeService } from './services/employee.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {

    isPreviewPhoto: boolean = false

    employee: employee = {
        id: 0,
        name: '',
        gender: '',
        email: '',
        phoneNumber: '',
        contactPreference: '',
        isActive: true,
        department: '',
        dateOfBirth: new Date(),
        photoPath: ''
    }

    departments: department[] = [
        { id: 1, name: 'IT' },
        { id: 2, name: 'Sales' },
        { id: 3, name: 'Human resources' },
        { id: 4, name: 'Marketing' }
    ]

    constructor(private employeeService: EmployeeService, private router: Router) { }

    ngOnInit() { }

    saveEmployee() {
        this.employeeService.addEmployee(this.employee)
        this.router.navigate(['/employees/list'])
    }

    onShowPreview() {
        this.isPreviewPhoto = !this.isPreviewPhoto
    }

}
