import { Injectable } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'

@Injectable({ providedIn: 'root' })

export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {

    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getToken()}`
      }
    })

    return next.handle(tokenizedRequest)

  }

  private getToken() {
    return localStorage.getItem('token')
  }

}
