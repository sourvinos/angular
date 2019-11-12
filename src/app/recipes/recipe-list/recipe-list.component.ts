import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

    recipes: IRecipe[]

    constructor(private router: Router, private route: ActivatedRoute) {
        this.recipes = this.route.snapshot.data['recipeList']
        console.log(this.recipes)
    }

    ngOnInit() {
    }

    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route })
    }

}
