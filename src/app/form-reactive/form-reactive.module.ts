import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormReactiveRoutingModule } from './form-reactive-routing';
import { FormReactiveComponent } from './user-interface/form-reactive.component';
import { MaterialSharedModule } from '../shared/material-shared.module';

@NgModule({
    declarations: [
        FormReactiveComponent,
    ],
    imports: [
        FormReactiveRoutingModule,
        SharedModule,
        MaterialSharedModule
    ]
})

export class FormReactiveModule { }
