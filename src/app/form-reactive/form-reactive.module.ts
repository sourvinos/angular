import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReactiveComponent } from './user-interface/form-reactive.component';
import { AppRoutingModule } from '../root/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
    declarations: [
        FormReactiveComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
    ]
})

export class FormReactiveModule { }
