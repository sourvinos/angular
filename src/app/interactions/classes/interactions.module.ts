import { NgModule } from '@angular/core';
import { MaterialDialogComponent } from 'src/app/material-dialog/material-dialog.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { IndexDialogComponent } from '../../shared/index-dialog/index-dialog.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { ChildComponent } from '../user-interface/child.component';
import { FooterComponent } from '../user-interface/footer.component';
import { HeaderComponent } from '../user-interface/header.component';
import { ParentComponent } from '../user-interface/parent.component';
import { InteractionsRouting } from './interactions.routing';

@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent,
        FooterComponent,
        HeaderComponent,
        IndexDialogComponent,
        MaterialDialogComponent,
    ],
    entryComponents: [
        MaterialDialogComponent,
        IndexDialogComponent
    ],
    imports: [
        InteractionsRouting,
        SharedModule,
        MaterialModule
    ]
})

export class InteractionsModule { }
