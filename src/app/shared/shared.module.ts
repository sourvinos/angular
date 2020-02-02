import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material'
import { RouterModule } from '@angular/router';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
    ]
})
export class SharedModule { }
