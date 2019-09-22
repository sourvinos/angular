import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../auth/services/auth.guard';

import { HomeComponent } from '../home/home.component';

import { ButtonsComponent } from './../buttons/buttons.component';
import { MatDialogsComponent } from '../mat-dialogs/dialogs.component';
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

import { ServersComponent } from '../server/servers.component';
import { SemanticComponent } from '../semantic-ui/semantic-ui.component';
import { SettingsComponent } from '../child-routes/settings.component';
import { ProfileComponent } from '../child-routes/profile.component';
import { UtilsComponent } from '../child-routes/utils.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'animations', component: MainComponent },
	{ path: 'buttons', component: ButtonsComponent },
	{ path: 'mat-dialogs', component: MatDialogsComponent },
	{ path: 'form-reactive', component: FormReactiveComponent },
	{ path: 'form-template', component: FormTemplateComponent },
	{ path: 'input-controls', component: InputsComponent },
	{ path: 'css-grid', component: CssGridComponent },
	{ path: 'data-binding', component: DataBindingComponent },
	{ path: 'arrays', component: ArraysComponent },
	{ path: 'parentToChild', component: ParentToChildComponent },
	{ path: 'parentFromChild', component: ParentFromChildComponent },
	{ path: 'semantic', component: SemanticComponent },
	{ path: 'eventsHome', component: EventsHomeComponent },
	{ path: 'events', component: EventsComponent },
	{ path: 'members', component: EventsMembersComponent, canActivate: [AuthGuard] },
	{ path: 'register', component: EventsRegisterComponent },
	{ path: 'login', component: EventsLoginComponent },
	{ path: 'servers', component: ServersComponent },
	{
		path: 'settings', component: SettingsComponent, children: [
			{ path: 'profile', component: ProfileComponent },
			{ path: 'utils', component: UtilsComponent }
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