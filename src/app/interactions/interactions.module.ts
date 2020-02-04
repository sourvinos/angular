import { MaterialDialogComponent } from 'src/app/material-dialog/material-dialog.component';
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { ChildComponent } from './child.component'
import { FooterComponent } from './footer.component'
import { HeaderComponent } from './header.component'
import { InteractionsRouting } from './interactions.routing'
import { ParentComponent } from './parent.component'
import { TableComponent } from '../shared-components/table/table.component'
import { InputDirective } from '../directives/input'
import { IndexDialogComponent } from '../shared-components/index-dialog/index-dialog.component'
import { MatDialogModule } from '@angular/material';

@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent,
        FooterComponent,
        HeaderComponent,
        TableComponent,
        InputDirective,
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
