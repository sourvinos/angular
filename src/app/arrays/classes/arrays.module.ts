import { ArraysRouting } from './arrays.routing';
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { ArraysComponent } from '../user-interface/arrays.component';

@NgModule({
    declarations: [
        ArraysComponent
    ],
    imports: [
        ArraysRouting,
        SharedModule,
    ]
})

export class ArraysModule { }
