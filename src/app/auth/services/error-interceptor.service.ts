import { MatSnackBar } from '@angular/material';
import { Injectable, NgZone } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'
import { CustomSnackbarService } from './custom-snackbar.service';

@Injectable({ providedIn: 'root' })

export class ErrorInterceptorService implements HttpInterceptor {

    constructor(public toastService: MatSnackBar, private customSnackbarService: CustomSnackbarService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // return next.handle(request).pipe(catchError(this.handleError))
        const req = request.clone();
        return next.handle(req).pipe(
            catchError(res => {
                console.log(res.status)
                if (res.status === 404) {
                    this.customSnackbarService.open(res.status)
                }
                // switch (res.status) {
                //     case 400:
                //     case 401:
                //     case 403:
                //     case 404:
                //     case 500:
                //         const errors = JSON.parse(res.errors);
                //         if (errors) {
                //             errors.map(e => {
                //                 this.customSnackbarService.open('ERROR')
                //             })
                //         }
                //         break
                //     default:
                //         this.customSnackbarService.open('ERROR, UNKNOWN')
                //         break
                // }
                return throwError(res)
            })
        );

    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMsg: string
        if (errorResponse.error instanceof Error) {
            errorMsg = "An error occured :" + errorResponse.error.message
            this.toastService.open('ERROR!')
        } else {
            errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`
            this.toastService.open('ERROR!')
        }
        this.toastService.open('ERROR!')
        return throwError(errorMsg)
    }

}
