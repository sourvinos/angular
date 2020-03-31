import { MaterialModule } from '../../shared/modules/material.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { NgModule } from '@angular/core'
import { PostWrapperComponent } from '../user-interface/wrapper-post'
import { PostListComponent } from '../user-interface/list-post'
import { PostFormComponent } from '../user-interface/form-post'
import { PostModalFormComponent } from '../user-interface/modal-form'
import { PostsRouting } from './posts.routing'

@NgModule({
    declarations: [
        PostWrapperComponent,
        PostListComponent,
        PostFormComponent,
        PostModalFormComponent,
    ],
    imports: [
        PostsRouting,
        SharedModule,
        MaterialModule
    ]
})

export class PostsModule { }
