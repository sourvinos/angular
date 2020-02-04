import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EventsComponent } from '../auth/events/events.component'
import { EventsHomeComponent } from '../auth/home/home.component'
import { EventsLoginComponent } from '../auth/login/login.component'
import { EventsMembersComponent } from '../auth/members/members.component'
import { EventsRegisterComponent } from '../auth/register/register.component'
import { AuthGuard } from './../auth/services/auth.guard'
import { PageNotFoundComponent } from './../page-not-found.component'

const appRoutes: Routes = [
	{ path: '', pathMatch: "full", redirectTo: "" },
	{ path: 'arrays', loadChildren: '../arrays/classes/arrays.module#ArraysModule' },
	{ path: 'form-reactive', loadChildren: '../form-reactive/form-reactive.module#FormReactiveModule' },
	{ path: 'form-template', loadChildren: '../form-template/form-template.module#FormTemplateModule' },
	{ path: 'employees', loadChildren: '../employees/classes/employee.module#EmployeeModule' },
	{ path: 'interactions', loadChildren: '../interactions/classes/interactions.module#InteractionsModule' },
	{ path: 'posts', loadChildren: '../posts/classes/posts.module#PostsModule' },
	{ path: 'material', loadChildren: '../material/classes/material.module#MaterialModule' },
	{ path: 'tables/userId/:userId', loadChildren: '../tables/classes/tables.module#TablesModule' },
	{
		path: 'auth', component: EventsHomeComponent, children: [
			{ path: '', component: EventsHomeComponent },
			{ path: 'events', component: EventsComponent },
			{ path: 'members', component: EventsMembersComponent, canActivate: [AuthGuard] },
			{ path: 'register', component: EventsRegisterComponent },
			{ path: 'login', component: EventsLoginComponent }
		]
	},
	{ path: 'pageNotFound', component: PageNotFoundComponent },
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
	exports: [RouterModule]
})

export class AppRoutingModule { }