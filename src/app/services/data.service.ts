import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })

export class DataService {

    constructor(private url: string, private httpClient: HttpClient) { }

    getAll() {
        return this.httpClient.get<any[]>(this.url).pipe(catchError(this.handleError))
    }

    getSingle(id: number) {
        return this.httpClient.get<any>(this.url + '/' + id)
    }

    create(resource: any) {
        return this.httpClient
            .post<void>(`${this.url}`, resource)
            .pipe(catchError(this.handleError))
    }

    update(resource: any) {
        return this.httpClient
            .put<void>(`${this.url}/${resource.id}`, resource)
            .pipe(catchError(this.handleError))
    }

    delete(id: number) {
        return this.httpClient
            .delete(`${this.url}/${id}`)
            .pipe(catchError(this.handleError))
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let response: string | HttpErrorResponse
        if (errorResponse.error instanceof ErrorEvent) {
            response = errorResponse.error.message
        } else {
            response = errorResponse
        }
        return throwError('OOPS')
    }

}
