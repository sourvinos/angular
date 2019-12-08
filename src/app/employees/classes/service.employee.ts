import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { DataService } from 'src/app/services/data.service'

@Injectable({ providedIn: 'root' })

export class EmployeeService extends DataService {

    constructor(http: HttpClient) {
        super('http://localhost:3000/employees', http)
    }

}