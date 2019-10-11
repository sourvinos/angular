import { RecipeService } from './recipe.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})

export class RecipesComponent {

    isFormVisible: boolean = false

    constructor(private recipeService: RecipeService) {
        this.recipeService.changeEmitted$.subscribe(result => { this.isFormVisible = result });
    }

}
