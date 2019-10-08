import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

    @Output() recipeWasSelected = new EventEmitter<Recipe>()

    recipes: Recipe[] = [
        new Recipe('Recipe A', 'Description for Recipe A', ''),
        new Recipe('Recipe B', 'Description for Recipe B', '')
    ]

    constructor() { }

    ngOnInit() { }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe)
    }

}
