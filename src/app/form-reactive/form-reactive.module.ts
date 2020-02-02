import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormReactiveRoutingModule } from './form-reactive-routing';
import { FormReactiveComponent } from './user-interface/form-reactive.component';

@NgModule({
    declarations: [
        FormReactiveComponent
    ],
    imports: [
        FormReactiveRoutingModule,
        SharedModule,
    ]
})

export class FormReactiveModule { }
