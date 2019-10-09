import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {

    @Input() recipe: Recipe

    // Step 3/5
    // Accept the index from the recipe-list
    @Input() index: Number

    constructor() { }

    ngOnInit() { }

}
