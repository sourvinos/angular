import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })

export class DataService {

    constructor(private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(this.url)
    }

    getSingle(id: number) {
        return this.http.get<any>(this.url + '/' + id)
    }

    create(resource: any) {
        return this.http
            .post<void>(`${this.url}`, resource)
            .pipe(catchError(this.handleError))
    }

    update(resource: any) {
        return this.http
            .put<void>(`${this.url}/${resource.id}`, resource)
            .pipe(catchError(this.handleError))
    }

    delete(id: number) {
        return this.http
            .delete(`${this.url}/${id}`)
            .pipe(catchError(this.handleError))
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            return throwError(console.log('A client-side or network error occurred:' + '\n' + JSON.stringify(error)))
        } else {
            return throwError(console.log('A back-end error occurred' + '\n' + JSON.stringify(error)))
        }
    }

}