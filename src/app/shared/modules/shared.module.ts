import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputDirective } from '../../directives/input';
import { CustomTableComponent } from '../table/table.component';

@NgModule({
    declarations: [
        InputDirective,
        CustomTableComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        InputDirective,
        CustomTableComponent
    ]
})

export class SharedModule { }
