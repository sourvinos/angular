import { PageNotFoundComponent } from './../user-interface/page-not-found.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
    {
        path: '', component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class PageNotFoundRouting { }