import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'

@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate {

    private loginURL = '/login'

    constructor(private router: Router) { }

    canActivate(): boolean {
        if (localStorage.getItem('token'))
            return true
        else {
            this.router.navigate([this.loginURL])
            return false
        }
    }

}
