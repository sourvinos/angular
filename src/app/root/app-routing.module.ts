import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../auth/services/auth.guard';

import { HomeComponent } from '../home/home.component';

import { ButtonsComponent } from './../buttons/buttons.component';
import { DialogsComponent } from '../dialogs/dialogs.component';
import { FormReactiveComponent } from '../form-reactive/form-reactive.component';
import { FormTemplateComponent } from '../form-template/form-template.component';
import { InputsComponent } from '../input-controls/input-controls.component';
import { CssGridComponent } from '../css-grid/css-grid.component';
import { MasterPassingDataComponent } from './../passing-data/master-passing-data.component';
import { BaseComponent } from '../addresses/base/base.component';
import { ArraysComponent } from '../arrays/arrays.component';

import { EventsHomeComponent } from '../auth/home/home.component';
import { EventsComponent } from '../auth/events/events.component';
import { EventsMembersComponent } from '../auth/members/members.component';
import { EventsRegisterComponent } from '../auth/register/register.component';
import { EventsLoginComponent } from '../auth/login/login.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'buttons', component: ButtonsComponent },
	{ path: 'dialogs', component: DialogsComponent },
	{ path: 'form-reactive', component: FormReactiveComponent },
	{ path: 'form-template', component: FormTemplateComponent },
	{ path: 'input-controls', component: InputsComponent },
	{ path: 'css-grid', component: CssGridComponent },
	{ path: 'passing-data', component: MasterPassingDataComponent },
	{ path: 'modules', component: BaseComponent },
	{ path: 'arrays', component: ArraysComponent },

	{ path: 'eventsHome', component: EventsHomeComponent },
	{ path: 'events', component: EventsComponent },
	{ path: 'members', component: EventsMembersComponent, canActivate: [AuthGuard] },
	{ path: 'register', component: EventsRegisterComponent },
	{ path: 'login', component: EventsLoginComponent }
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