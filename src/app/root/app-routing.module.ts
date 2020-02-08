import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from '../page-not-found/user-interface/page-not-found.component'

const appRoutes: Routes = [
	{ path: '', pathMatch: "full", redirectTo: "" },
	{ path: 'arrays', loadChildren: '../arrays/classes/arrays.module#ArraysModule' },
	{ path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
	{ path: 'employees', loadChildren: '../employees/classes/employee.module#EmployeeModule' },
	{ path: 'form-reactive', loadChildren: '../form-reactive/form-reactive.module#FormReactiveModule' },
	{ path: 'form-template', loadChildren: '../form-template/form-template.module#FormTemplateModule' },
	{ path: 'interactions', loadChildren: '../interactions/classes/interactions.module#InteractionsModule' },
	{ path: 'posts', loadChildren: '../posts/classes/posts.module#PostsModule' },
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
	exports: [RouterModule]
})

export class AppRoutingModule { }