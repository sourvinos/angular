import { Recipe } from './recipe.model'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Recipe A', 'Description for Recipe A', ''),
        new Recipe('Recipe B', 'Description for Recipe B', '')
    ]

    getRecipes() {
        return this.recipes.slice() // Return a copy of the array
    }

    getRecipe(index: number) {
        return this.recipes[index]
    }

    private emitChangeSource = new Subject<any>();

    changeEmitted$ = this.emitChangeSource.asObservable();

    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }

}