import { MaterialDialogComponent } from 'src/app/material-dialog/material-dialog.component';
import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { ChildComponent } from '../user-interface/child.component'
import { FooterComponent } from '../user-interface/footer.component'
import { HeaderComponent } from '../user-interface/header.component'
import { InteractionsRouting } from './interactions.routing'
import { ParentComponent } from '../user-interface/parent.component'
import { TableComponent } from '../../shared-components/table/table.component'
import { IndexDialogComponent } from '../../shared-components/index-dialog/index-dialog.component'
import { MatDialogModule } from '@angular/material';

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
        MatDialogModule,
        SharedModule,
    ]
})

export class InteractionsModule { }
