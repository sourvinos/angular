import { Recipe } from './recipe.model'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(1, 'Recipe A', 'Description for Recipe A', ''),
        new Recipe(2, 'Recipe B', 'Description for Recipe B', ''),
        new Recipe(3, 'Recipe C', 'Description for Recipe C', ''),
        new Recipe(4, 'Recipe D', 'Description for Recipe D', ''),
        new Recipe(5, 'Recipe E', 'Description for Recipe E', ''),
        new Recipe(6, 'Recipe F', 'Description for Recipe F', ''),
        new Recipe(7, 'Recipe G', 'Description for Recipe G', ''),
        new Recipe(8, 'Recipe H', 'Description for Recipe H', ''),
        new Recipe(9, 'Recipe I', 'Description for Recipe I', ''),
        new Recipe(10, 'Recipe J', 'Description for Recipe J', '')
    ]

    getRecipes() {
        return this.recipes.slice()
    }

    getRecipe(index: number) {
        return this.recipes[index - 1]
    }

    saveRecipe(index: number, recipe: any) {
        if (index) {
            this.recipes[index - 1] = recipe
        }
    }

    private emitChangeSource = new Subject<any>();
    changeEmitted$ = this.emitChangeSource.asObservable();

    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }

    private teacherMessageSource = new Subject<string>()
    teacherMessage = this.teacherMessageSource.asObservable()

    sendMessage(message: string) {
        this.teacherMessageSource.next(message)
    }
}