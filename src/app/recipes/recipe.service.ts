import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from './recipe.model';

@Injectable({ providedIn: 'root' })

export class RecipeService {

    url = 'http://localhost:3000/recipes'

    constructor(private http: HttpClient) {

    }
    getRecipes(): Observable<IRecipe[]> {
        return this.http.get<IRecipe[]>(this.url)
    }

    getRecipe(id: number): Observable<IRecipe> {
        return this.http.get<IRecipe>(this.url + '/' + id)
    }

    addRecipe(formData: IRecipe): Observable<IRecipe> {
        return this.http.post<IRecipe>(this.url, formData)
    }

    updateRecipe(id: number, formData: IRecipe): Observable<IRecipe> {
        return this.http.put<IRecipe>(this.url + '/' + id, formData)
    }

    deleteRecipe(id: number): Observable<IRecipe> {
        return this.http.delete<IRecipe>(this.url + '/' + id)
    }

}