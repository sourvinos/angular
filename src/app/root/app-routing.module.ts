import { PageNotFoundComponent } from './../page-not-found.component';
import { CreateEmployeeComponent } from './../employees/create-employee.component';
import { ListEmployeesComponent } from './../employees/list-employees.component';
import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../auth/services/auth.guard';
import { MaterialComponent } from '../material/material.component';
import { FormReactiveComponent } from '../form-reactive/form-reactive.component';
import { FormTemplateComponent } from '../form-template/form-template.component';
import { InputsComponent } from '../input-controls/input-controls.component';
import { CssGridComponent } from '../css-grid/css-grid.component';
import { DataBindingComponent } from '../data-binding/data-binging.component';
import { MainComponent } from '../animations/main/main.component'
import { ArraysComponent } from '../arrays/arrays.component';
import { EventsHomeComponent } from '../auth/home/home.component';
import { EventsComponent } from '../auth/events/events.component';
import { EventsMembersComponent } from '../auth/members/members.component';
import { EventsRegisterComponent } from '../auth/register/register.component';
import { EventsLoginComponent } from '../auth/login/login.component';
import { ParentToChildComponent } from '../parent-child/parent.component';
import { ParentFromChildComponent } from '../child-parent/parent.component';
import { SemanticComponent } from '../semantic-ui/semantic-ui.component';
import { CanDeactivateGuard } from '../services/can-deactivate-guard-service';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { MaxDataBindingComponent } from '../data-binding/max-data-binding.component';
import { EmployeeListResolverService } from '../employees/services/employee-list-resolver.service';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeListResolverService } from '../recipes/recipe-list-resolver.service';
import { PostListResolverService } from '../posts/classes/posts-list-resolver.service';
// Posts
import { WrapperComponent } from '../posts/user-interface/wrapper-post';
import { ListPostComponent } from '../posts/user-interface/list-post';
import { FormPostComponent } from '../posts/user-interface/form-post';
import { PostEditResolverService } from '../posts/classes/post-edit-resolver.service';

const appRoutes: Routes = [
	{ path: '', pathMatch: "full", redirectTo: "" },
	{ path: 'animations', component: MainComponent },
	{ path: 'arrays', component: ArraysComponent },
	{ path: 'material', component: MaterialComponent },
	{ path: 'form-reactive', component: FormReactiveComponent, canDeactivate: [CanDeactivateGuard] },
	{ path: 'form-template', component: FormTemplateComponent },
	{ path: 'input-controls', component: InputsComponent },
	{ path: 'css-grid', component: CssGridComponent },
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
	{
		path: 'posts', component: WrapperComponent, children: [{
			path: 'user/:userId', component: ListPostComponent, children: [{
				path: 'post/:postId', component: FormPostComponent
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
	{ path: 'employees/list', component: ListEmployeesComponent, resolve: { employeeList: EmployeeListResolverService } },
	{ path: 'employees/new', component: CreateEmployeeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
	exports: [RouterModule]
})

export class AppRoutingModule { }