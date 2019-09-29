import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../root/app-routing.module';
import { EventsComponent } from './events/events.component';
import { EventsHomeComponent } from './home/home.component';
import { EventsLoginComponent } from './login/login.component';
import { EventsMembersComponent } from './members/members.component';
import { EventsRegisterComponent } from './register/register.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
    declarations: [
        EventsHomeComponent,
        EventsComponent,
        EventsMembersComponent,
        EventsRegisterComponent,
        EventsLoginComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        EventsHomeComponent,
        EventsComponent,
        EventsMembersComponent,
        EventsRegisterComponent,
        EventsLoginComponent
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }],

})

export class AuthModule { }