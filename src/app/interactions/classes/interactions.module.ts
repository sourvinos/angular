import { NgModule } from '@angular/core';
import { MaterialDialogComponent } from 'src/app/material-dialog/material-dialog.component';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { IndexDialogComponent } from '../../shared-components/index-dialog/index-dialog.component';
import { TableComponent } from '../../shared-components/table/table.component';
import { SharedModule } from '../../shared/shared.module';
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
        TableComponent,
        IndexDialogComponent,
        MaterialDialogComponent
    ],
    entryComponents: [
        MaterialDialogComponent,
        IndexDialogComponent
    ],
    imports: [
        InteractionsRouting,
        SharedModule,
        MaterialSharedModule
    ]
})

export class InteractionsModule { }
