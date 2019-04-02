import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from './user';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private url: string = 'https://reqres.in/api/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.url);
    }

    getUser(countryId: string): Observable<IUser> {
        return this.http.get<IUser>(this.url + '/' + countryId);
    }

    addUser(formData: IUser): Observable<IUser> {
        return this.http.post<IUser>(this.url, formData);
    }

    updateUser(countryId: string, formData: IUser): Observable<IUser> {
        return this.http.put<IUser>(this.url + '/' + countryId, formData);
    }

    deleteUser(countryId: string): Observable<IUser> {
        return this.http.delete<IUser>(this.url + '/' + countryId);
    }

}
