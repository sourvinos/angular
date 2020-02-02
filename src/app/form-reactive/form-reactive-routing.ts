import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CanDeactivateGuard } from '../services/can-deactivate-guard-service'
import { FormReactiveComponent } from './user-interface/form-reactive.component'

const appRoutes: Routes = [
    {
        path: 'form-reactive', component: FormReactiveComponent, canDeactivate: [CanDeactivateGuard]
    },
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class FormReactiveRoutingModule { }