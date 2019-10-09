import { Recipe } from './recipe.model'
import { Injectable } from '@angular/core'

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

}