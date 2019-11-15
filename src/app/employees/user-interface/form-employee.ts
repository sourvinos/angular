import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from '../classes/model.employee';
import { department } from '../classes/model.department';
import { EmployeeService } from '../classes/employee.service';

@Component({
    selector: 'form-employee',
    templateUrl: './form-employee.html',
    styleUrls: ['./form-employee.css']
})

export class EmployeeFormComponent implements OnInit {

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
        dateOfBirth: '',
        photoPath: '',
        age: '0',
        salary: 0
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
