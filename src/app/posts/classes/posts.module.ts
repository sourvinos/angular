import { MaterialSharedModule } from './../../shared/material-shared.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core'
import { PostWrapperComponent } from '../user-interface/wrapper-post'
import { PostListComponent } from '../user-interface/list-post'
import { PostFormComponent } from '../user-interface/form-post'
import { PostModalForm } from '../user-interface/modal-form'
import { PostsRouting } from './posts.routing'

@NgModule({
    declarations: [
        PostWrapperComponent,
        PostListComponent,
        PostFormComponent,
        PostModalForm,
    ],
    imports: [
        PostsRouting,
        SharedModule,
        MaterialSharedModule
    ]
})
export class PostsModule { }