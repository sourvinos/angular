import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent {

    // Step 3/5
    // Accept the receipe from the recipe-list
    @Input() recipe: Recipe
    // Accept the index from the recipe-list
    @Input() index: Number

    constructor() { }

}
