import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { TablesHostComponent } from '../user-interface/tables-host.component';
import { TablesComponent } from '../user-interface/tables.component';
import { TablesRouting } from './tables.routing';

@NgModule({
    declarations: [
        TablesHostComponent,
        TablesComponent
    ],
    imports: [
        TablesRouting,
        SharedModule,
        MaterialSharedModule
    ]
})

export class TablesModule { }
