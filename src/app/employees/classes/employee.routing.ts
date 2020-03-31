import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmployeeFormComponent } from '../user-interface/form-employee'
import { EmployeeListComponent } from '../user-interface/list-employee'
import { EmployeeWrapperComponent } from '../user-interface/wrapper-employee'
import { CanDeactivateGuard } from 'src/app/services/can-deactivate-guard-service'
import { EmployeeListResolver } from './employee-list.resolver'

const appRoutes: Routes = [
    {
        path: '', component: EmployeeWrapperComponent, children: [
            { path: 'list', component: EmployeeListComponent, resolve: { employeeList: EmployeeListResolver } },
            { path: 'new', component: EmployeeFormComponent, canDeactivate: [CanDeactivateGuard] },
            { path: ':id', component: EmployeeFormComponent, canDeactivate: [CanDeactivateGuard] }
        ], runGuardsAndResolvers: 'always'
    }
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class EmployeeRouting { }
