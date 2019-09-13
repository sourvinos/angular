import { NgModule } from '@angular/core'
import { DataBindingComponent } from '../data-binding/data-binging.component'
import { InputFormatDirective } from './../directives/input-format.directive'
import { CssGridComponent } from './../css-grid/css-grid.component'
import { FormTemplateComponent } from './../form-template/form-template.component'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonsComponent } from './../buttons/buttons.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'

import { HomeComponent } from './../home/home.component'
import { FormReactiveComponent } from '../form-reactive/form-reactive.component'
import { UserListComponent } from '../tests/04-forms/user-list.component'
import { DialogsComponent } from '../dialogs/dialogs.component'
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component'
import { InputsComponent } from '../input-controls/input-controls.component'
import { MainNavComponent } from '../main-nav/main-nav.component'
import { AddressesModule } from '../addresses/addresses.module'
import { ArraysComponent } from '../arrays/arrays.component'

// Authentication and Authorization
import { EventsHomeComponent } from '../auth/home/home.component'
import { EventsComponent } from '../auth/events/events.component';
import { EventsMembersComponent } from '../auth/members/members.component';
import { EventsRegisterComponent } from '../auth/register/register.component';
import { EventsLoginComponent } from '../auth/login/login.component';
import { TokenInterceptorService } from '../auth/services/token-interceptor.service';

// Component interaction
import { ParentToChildComponent } from '../parent-child/parent.component';
import { ChildFromParentComponent } from './../parent-child/child.component';
import { ParentFromChildComponent } from './../child-parent/parent.component';
import { ChildToParentComponent } from '../child-parent/child.component';

import { ServerComponent } from './../server/server.component';
import { ServersComponent } from './../server/servers.component';
import { SemanticComponent } from '../semantic-ui/semantic.component'

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
    DataBindingComponent,
    ArraysComponent,
    ServerComponent,
    ServersComponent,
    EventsHomeComponent,
    EventsComponent,
    EventsMembersComponent,
    EventsRegisterComponent,
    EventsLoginComponent,
    ParentToChildComponent,
    ChildFromParentComponent,
    ParentFromChildComponent,
    ChildToParentComponent,
    SemanticComponent
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
  providers: [{ provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
