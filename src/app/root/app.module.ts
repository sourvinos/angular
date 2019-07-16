import { ChildPassingDataComponent } from './../passing-data/child-passing-data.component';
import { MasterPassingDataComponent } from './../passing-data/master-passing-data.component';
import { InputFormatDirective } from './../directives/input-format.directive';
import { CssGridComponent } from './../css-grid/css-grid.component';
import { FormTemplateComponent } from './../form-template/form-template.component';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsComponent } from './../buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { HomeComponent } from './../home/home.component';
import { FormReactiveComponent } from '../form-reactive/form-reactive.component';
import { UserListComponent } from '../tests/04-forms/user-list.component';
import { DialogsComponent } from '../dialogs/dialogs.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { InputsComponent } from '../input-controls/input-controls.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { AddressesModule } from '../addresses/addresses.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormReactiveComponent,
    FormTemplateComponent,
    UserListComponent,
    ButtonsComponent,
    DialogsComponent,
    DeleteDialogComponent,
    InputsComponent,
    CssGridComponent,
    MainNavComponent,
    InputFormatDirective,
    MasterPassingDataComponent,
    ChildPassingDataComponent,
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AddressesModule
  ],
  providers: [{ provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }],
  bootstrap: [AppComponent]
})

export class AppModule { }
