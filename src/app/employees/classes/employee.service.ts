import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { photo } from './model.photo';
import { employee } from './model.employee';

@Injectable({ providedIn: 'root' })

export class EmployeeService {

    private url: string = 'https://jsonplaceholder.typicode.com/photos'

    constructor(private http: HttpClient) { }

    employees: employee[] = [
        { id: 1, name: 'Mark', gender: 'Male', contactPreference: 'Email', email: 'mark@hotmail.com', dateOfBirth: '1975-01-25', department: '1', isActive: true, photoPath: 'assets/mark.png', age: '12.6', salary: 1234.63 },
        { id: 2, name: 'Pam', gender: 'Female', contactPreference: 'Email', email: 'pam@yahoo.com', dateOfBirth: '1980-02-05', department: '2', isActive: true, photoPath: 'assets/pam.png', age: '19.6', salary: 124.63 },
        { id: 3, name: 'Julie', gender: 'Female', contactPreference: 'Email', email: 'julie@hotmail.com', dateOfBirth: '1970-06-07', department: '3', isActive: true, photoPath: 'assets/julie.png', age: '11.9', salary: 756.10 },
        { id: 4, name: 'Lisa', gender: 'Female', contactPreference: 'Email', email: 'lisa@hotmail.com', dateOfBirth: '2001-12-01', department: '1', isActive: true, photoPath: 'assets/liza.png', age: '12.0', salary: 365.63 },
        { id: 5, name: 'Bob', gender: 'Male', contactPreference: 'Email', email: 'mark@hotmail.com', dateOfBirth: '1975-01-05', department: '1', isActive: true, photoPath: 'assets/mark.png', age: '12.6', salary: 744.63 },
        { id: 6, name: 'Maria', gender: 'Female', contactPreference: 'Email', email: 'pam@yahoo.com', dateOfBirth: '1980-02-05', department: '2', isActive: true, photoPath: 'assets/pam.png', age: '19.6', salary: 123.63 },
        { id: 7, name: 'Samantha', gender: 'Female', contactPreference: 'Email', email: 'julie@hotmail.com', dateOfBirth: '1970-06-07', department: '3', isActive: true, photoPath: 'assets/julie.png', age: '11.9', salary: 134.63 },
        { id: 8, name: 'Foxxy', gender: 'Female', contactPreference: 'Email', email: 'lisa@hotmail.com', dateOfBirth: '2001-12-01', department: '1', isActive: true, photoPath: 'assets/liza.png', age: '12.0', salary: 234.63 }
    ]

    photos: photo[] = []

    getEmployees() {
        return of(this.employees).pipe(delay(0))
    }

    getPhotos(albumId: number) {
        return this.http.get<photo[]>(this.url + '?albumId=' + albumId)
    }

    addEmployee(employee: employee) {
        this.employees.push(employee)
    }

}