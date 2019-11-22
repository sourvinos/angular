import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArraysComponent } from '../arrays/arrays.component';
import { AuthGuard } from './../auth/services/auth.guard';
import { CanDeactivateGuard } from '../services/can-deactivate-guard-service';
import { DataBindingComponent } from '../data-binding/data-binging.component';
import { EventsComponent } from '../auth/events/events.component';
import { EventsHomeComponent } from '../auth/home/home.component';
import { EventsLoginComponent } from '../auth/login/login.component';
import { EventsMembersComponent } from '../auth/members/members.component';
import { EventsRegisterComponent } from '../auth/register/register.component';
import { FormReactiveComponent } from '../form-reactive/form-reactive.component';
import { FormTemplateComponent } from '../form-template/form-template.component';
import { InputsComponent } from '../input-controls/input-controls.component';
import { MainComponent } from '../animations/main/main.component'
import { MaterialComponent } from '../material/material.component';
import { MaxDataBindingComponent } from '../data-binding/max-data-binding.component';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { PageNotFoundComponent } from './../page-not-found.component';
import { ParentFromChildComponent } from '../child-parent/parent.component';
import { ParentToChildComponent } from '../parent-child/parent.component';
import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeListResolverService } from '../recipes/recipe-list-resolver.service';
import { RecipesComponent } from '../recipes/recipes.component';
import { SemanticComponent } from '../semantic-ui/semantic-ui.component';
import { TablesComponent } from '../tables/tables.component';
// Posts
import { PostWrapperComponent } from '../posts/user-interface/wrapper-post';
import { PostListComponent } from '../posts/user-interface/list-post';
import { PostFormComponent } from '../posts/user-interface/form-post';
import { PostEditResolverService } from '../posts/classes/resolver-edit-post';
import { PostListResolverService } from '../posts/classes/resolver-list-post';
// Employees
import { EmployeeWrapperComponent } from '../employees/user-interface/wrapper-employee';
import { EmployeeListComponent } from '../employees/user-interface/list-employee';
import { EmployeeFormComponent } from '../employees/user-interface/form-employee';
import { EmployeeListResolverService } from '../employees/classes/resolver-list-employee';

const appRoutes: Routes = [
	{ path: '', pathMatch: "full", redirectTo: "" },
	{ path: 'animations', component: MainComponent },
	{ path: 'arrays', component: ArraysComponent },
	{ path: 'material', component: MaterialComponent },
	{ path: 'form-reactive', component: FormReactiveComponent, canDeactivate: [CanDeactivateGuard] },
	{ path: 'form-template', component: FormTemplateComponent },
	{ path: 'input-controls', component: InputsComponent },
	{ path: 'data-binding', component: DataBindingComponent },
	{ path: 'arrays', component: ArraysComponent },
	{ path: 'parent-to-child', component: ParentToChildComponent },
	{ path: 'parentFromChild', component: ParentFromChildComponent },
	{ path: 'semantic', component: SemanticComponent },
	{ path: 'eventsHome', component: EventsHomeComponent },
	{ path: 'events', component: EventsComponent },
	{ path: 'members', component: EventsMembersComponent, canActivate: [AuthGuard] },
	{ path: 'register', component: EventsRegisterComponent },
	{ path: 'login', component: EventsLoginComponent },
	{ path: 'modal-dialog', component: ModalDialogComponent },
	{ path: 'pageNotFound', component: PageNotFoundComponent },
	{ path: 'max-data-binding', component: MaxDataBindingComponent },
	{ path: 'tables/userId/:userId', component: TablesComponent },
	{
		path: 'posts', component: PostWrapperComponent, children: [{
			path: 'userId/:userId', component: PostListComponent, resolve: { postList: PostListResolverService }, children: [{
				path: 'post/:postId', component: PostFormComponent, canDeactivate: [CanDeactivateGuard], resolve: { postEdit: PostEditResolverService },
			}]
		}], runGuardsAndResolvers: 'always'
	},
	{
		path: 'recipes', component: RecipesComponent, children: [
			{ path: '', component: RecipeListComponent, resolve: { recipeList: RecipeListResolverService } },
			{ path: 'new', component: RecipeEditComponent },
			{ path: ':id', component: RecipeEditComponent, canDeactivate: [CanDeactivateGuard] }
		]
	},
	{
		path: 'employees', component: EmployeeWrapperComponent, children: [
			{ path: 'list', component: EmployeeListComponent, resolve: { employeeList: EmployeeListResolverService } },
			{ path: 'new', component: EmployeeFormComponent },
			{ path: ':id', component: EmployeeFormComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
	exports: [RouterModule]
})

export class AppRoutingModule { }