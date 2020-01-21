import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { catchError, filter, finalize, switchMap, take, tap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })

export class TokenInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(this.attachTokenToRequest(request)).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) { }
        }),
            catchError((err): Observable<any> => {
                if (err instanceof HttpErrorResponse) {
                    switch ((<HttpErrorResponse>err).status) {
                        case 404:
                            return this.handleError(err)
                    }
                } else {
                    return throwError(this.handleError)
                }
            })
        )

    }

    private attachTokenToRequest(request: HttpRequest<any>) {

        var token = localStorage.getItem('jwt')
        return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })

    }

    private handleError(errorResponse: HttpErrorResponse) {

        let errorMsg: string

        if (errorResponse.error instanceof Error) {
            errorMsg = "An error occured :" + errorResponse.error.message
        } else {
            errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`
        }

        return throwError(errorMsg)
    }

    private getToken() {
        return localStorage.getItem('token')
    }

    private handleHttpResponseError(request: HttpRequest<any>, next: HttpHandler) {
        return
    }

}
