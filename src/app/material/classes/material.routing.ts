import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MaterialComponent } from '../user-interface/material.component'

const appRoutes: Routes = [
    {
        path: '', component: MaterialComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class MaterialRouting { }