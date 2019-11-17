import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employee } from './model.employee';

@Injectable({ providedIn: 'root' })

export class EmployeeService {

    private url: string = 'http://localhost:3000/employees'

    constructor(private http: HttpClient) { }

    getEmployees() {
        return this.http.get<employee[]>(this.url)
    }

    getEmployee(employeeId: number) {
        return this.http.get<employee>(this.url + '/' + employeeId)
    }

    updateEmployee(employee: employee): Observable<void> {
        console.log('Updating', employee)
        return this.http.put<void>(`${this.url}/${employee.id}`, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }

}