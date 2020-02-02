import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { EmployeeRoutingModule } from '../employees/classes/routing.employees'
import { EmployeeFormComponent } from '../employees/user-interface/form-employee'
import { EmployeeItemComponent } from '../employees/user-interface/item-employee'
import { EmployeeListComponent } from '../employees/user-interface/list-employee'
import { EmployeeWrapperComponent } from '../employees/user-interface/wrapper-employee'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    declarations: [
        EmployeeWrapperComponent,
        EmployeeListComponent,
        EmployeeItemComponent,
        EmployeeFormComponent,
    ],
    imports: [
        EmployeeRoutingModule, // First
        AppRoutingModule, // Second
        SharedModule,
    ]
})

export class EmployeesModule { }
