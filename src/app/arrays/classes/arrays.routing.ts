import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ArraysComponent } from '../user-interface/arrays.component'

const appRoutes: Routes = [
    {
        path: '', component: ArraysComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class ArraysRouting { }