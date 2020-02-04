import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EventsComponent } from './events/events.component'
import { EventsHomeComponent } from './home/home.component'
import { EventsLoginComponent } from './login/login.component'
import { EventsRegisterComponent } from './register/register.component'
import { AuthGuard } from './services/auth.guard'
import { EventsMembersComponent } from './members/members.component'

const appRoutes: Routes = [
    {
        path: '', component: EventsHomeComponent, children: [
            { path: 'login', component: EventsLoginComponent },
            { path: 'register', component: EventsRegisterComponent },
            { path: 'events', component: EventsComponent },
            { path: 'members', component: EventsMembersComponent, canActivate: [AuthGuard] }
        ], runGuardsAndResolvers: 'always'
    }
]

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class AuthRouting { }