import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TablesHostComponent } from '../user-interface/tables-host.component'

const appRoutes: Routes = [
    {
        path: '', component: TablesHostComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class TablesRouting { }