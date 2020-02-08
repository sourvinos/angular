import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/modules/shared.module';
import { FormTemplateRoutingModule } from './form-template-routing';
import { FormTemplateComponent } from './form-template.component';

@NgModule({
    declarations: [
        FormTemplateComponent,
    ],
    imports: [
        FormTemplateRoutingModule,
        SharedModule
    ]
})

export class FormTemplateModule { }
