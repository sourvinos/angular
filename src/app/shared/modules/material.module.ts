import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule, MatSnackBarModule, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ],
    providers: [
        { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
    ]
})

export class MaterialModule { }
