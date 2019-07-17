import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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