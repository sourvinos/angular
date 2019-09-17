import { Ingredient } from './ingredient';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root', })

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient(1, 'Apples'),
        new Ingredient(2, 'Oranges'),
        new Ingredient(3, 'Bread')
    ]

    ingredientsChanged = new EventEmitter<Ingredient[]>()

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    editIngredient() {
        console.log(this.ingredients[1])
        this.ingredients.splice(1, 1)
        this.ingredients.push(new Ingredient(2, 'Water'))
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

}

