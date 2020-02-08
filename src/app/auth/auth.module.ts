import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/modules/shared.module';
import { AuthRouting } from './auth.routing';
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
        AuthRouting,
        SharedModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
    }],

})

export class AuthModule { }