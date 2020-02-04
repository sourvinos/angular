import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialRouting } from './material.routing'
import { MaterialSharedModule } from 'src/app/shared/material-shared.module'
import { MaterialComponent } from '../user-interface/material.component'

@NgModule({
    declarations: [
        MaterialComponent
    ],
    imports: [
        MaterialRouting,
        CommonModule,
        SharedModule,
        MaterialSharedModule
    ]
})

export class MaterialModule { }
