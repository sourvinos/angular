import { ComponentFixture } from '@angular/core/testing';
import { EmployeeListComponent } from './list-employee';
import { DebugElement } from '@angular/core';
import { Employee } from '../classes/model.employee';

describe('EmployeeListComponent', () => {

    let fixture: ComponentFixture<EmployeeListComponent>
    let component: EmployeeListComponent
    let rootElement: DebugElement

    const employeeServiceStub = {
        employee: {
            id: 1,
            name: 'John Doe',
            email: 'john@email.com'
        },
        getEmployee: async (employee: Employee) => {
            component.employee = this.employee
        }
    }

})