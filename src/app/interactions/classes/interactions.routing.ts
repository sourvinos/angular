import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../user-interface/parent.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: ParentComponent }
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class InteractionsRouting { }