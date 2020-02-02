import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmployeeFormComponent } from '../user-interface/form-employee'
import { EmployeeListComponent } from '../user-interface/list-employee'
import { EmployeeWrapperComponent } from '../user-interface/wrapper-employee'
import { CanDeactivateGuard } from 'src/app/services/can-deactivate-guard-service'

const appRoutes: Routes = [
    {
        path: '', component: EmployeeWrapperComponent, children: [
            { path: 'list', component: EmployeeListComponent },
            { path: 'new', component: EmployeeFormComponent },
            { path: ':id', component: EmployeeFormComponent, canDeactivate: [CanDeactivateGuard] }
        ], runGuardsAndResolvers: 'always'
    }
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class EmployeeRoutingModule { }