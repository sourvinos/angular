import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmployeeFormComponent } from '../user-interface/form-employee'
import { EmployeeListComponent } from '../user-interface/list-employee'
import { EmployeeWrapperComponent } from '../user-interface/wrapper-employee'

const appRoutes: Routes = [
    {
        path: 'employees', component: EmployeeWrapperComponent, children: [
            { path: 'list', component: EmployeeListComponent },
            { path: 'new', component: EmployeeFormComponent },
            { path: ':id', component: EmployeeFormComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class EmployeeRoutingModule { }