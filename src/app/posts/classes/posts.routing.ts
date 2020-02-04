import { PostWrapperComponent } from './../user-interface/wrapper-post';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostListComponent } from '../user-interface/list-post';
import { PostListResolverService } from './post-list.resolver';
import { PostFormComponent } from '../user-interface/form-post';
import { CanDeactivateGuard } from 'src/app/services/can-deactivate-guard-service';
import { PostEditResolverService } from './post-edit.resolver';

const appRoutes: Routes = [
    {
        path: '', component: PostWrapperComponent, children: [
            { path: 'list', component: PostListComponent },
            {
                path: 'userId/:userId', component: PostListComponent, resolve: { postList: PostListResolverService }, children: [{
                    path: 'post/:postId', component: PostFormComponent, canDeactivate: [CanDeactivateGuard], resolve: { postEdit: PostEditResolverService },
                }]
            }], runGuardsAndResolvers: 'always'
    },

]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class PostsRouting { }