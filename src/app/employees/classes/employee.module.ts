import { CustomTableComponent } from './../../shared/table/table.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
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
        EmployeeFormComponent,
    ],
    imports: [
        EmployeeRouting,
        SharedModule,
        MaterialModule
    ]
})

export class EmployeeModule { }
