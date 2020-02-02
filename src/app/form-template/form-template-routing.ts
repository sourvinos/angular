import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CanDeactivateGuard } from '../services/can-deactivate-guard-service'
import { FormTemplateComponent } from './form-template.component'

const appRoutes: Routes = [
    {
        path: 'form-template', component: FormTemplateComponent, canDeactivate: [CanDeactivateGuard]
    },
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class FormTemplateRoutingModule { }