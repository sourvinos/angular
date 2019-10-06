import { HomecolorBlueComponent } from './../homecolor-blue/homecolor-blue.component';
import { HomecolorComponent } from './../homecolor/homecolor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../auth/services/auth.guard';

import { HomeComponent } from '../home/home.component';

import { ButtonsComponent } from './../buttons/buttons.component';
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
import { SettingsComponent } from '../child-routes/settings.component';
import { ProfileComponent } from '../child-routes/profile.component';
import { UtilsComponent } from '../child-routes/utils.component';
import { CanDeactivateGuard } from '../services/can-deactivate-guard-service';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { EmployeeFormComponent } from './../employees/form.component';
import { EmployeesListComponent } from '../employees/list.component';
import { HomebaseComponent } from '../homebase/homebase.component';

const appRoutes: Routes = [
	// { path: '', component: HomeComponent },
	{ path: 'animations', component: MainComponent },
	{ path: 'buttons', component: ButtonsComponent },
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
	{
		path: 'settings', component: SettingsComponent, children: [
			{ path: 'profile', component: ProfileComponent },
			{ path: 'utils', component: UtilsComponent }
		]
	},
	{
		path: 'employees', children: [
			{ path: '', component: EmployeesListComponent },
			{ path: 'create', component: EmployeeFormComponent },
			{ path: 'edit/:id', component: EmployeeFormComponent }
		]
	},
	{
		path: 'home', component: HomeComponent, children: [
			{ path: '', component: HomebaseComponent }, {
				path: 'employees', component: EmployeesListComponent, children: [
					{ path: '', component: EmployeeFormComponent }
				]
			}
		]
	}

];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }