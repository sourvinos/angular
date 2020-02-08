import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/modules/shared.module';
import { FormReactiveRoutingModule } from './form-reactive-routing';
import { FormReactiveComponent } from './user-interface/form-reactive.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
    declarations: [
        FormReactiveComponent,
    ],
    imports: [
        FormReactiveRoutingModule,
        SharedModule,
        MaterialModule
    ]
})

export class FormReactiveModule { }
