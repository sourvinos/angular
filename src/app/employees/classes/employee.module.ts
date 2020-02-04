import { NgModule } from '@angular/core';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeFormComponent } from '../user-interface/form-employee';
import { EmployeeItemComponent } from '../user-interface/item-employee';
import { EmployeeListComponent } from '../user-interface/list-employee';
import { EmployeeWrapperComponent } from '../user-interface/wrapper-employee';
import { EmployeeRouting } from './employee.routing';

@NgModule({
    declarations: [
        EmployeeWrapperComponent,
        EmployeeListComponent,
        EmployeeItemComponent,
        EmployeeFormComponent
    ],
    imports: [
        EmployeeRouting,
        SharedModule,
        MaterialSharedModule
    ]
})

export class EmployeeModule { }
