import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material'
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
        MatButtonModule,
    ]
})

export class SharedModule { }
