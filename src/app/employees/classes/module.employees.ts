import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { EmployeeRoutingModule } from './routing.employees'
import { EmployeeFormComponent } from '../user-interface/form-employee'
import { EmployeeItemComponent } from '../user-interface/item-employee'
import { EmployeeListComponent } from '../user-interface/list-employee'
import { EmployeeWrapperComponent } from '../user-interface/wrapper-employee'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
    declarations: [
        EmployeeWrapperComponent,
        EmployeeListComponent,
        EmployeeItemComponent,
        EmployeeFormComponent,
    ],
    imports: [
        EmployeeRoutingModule,
        SharedModule,
    ]
})

export class EmployeesModule { }
