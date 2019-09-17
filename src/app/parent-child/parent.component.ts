import { ShoppingListService } from './shopping-list.service';
import { AfterViewInit, OnInit } from '@angular/core';
import { ChildFromParentComponent } from './child.component';
import { Component, ViewChild } from '@angular/core';
import { Ingredient } from './ingredient';

@Component({
    selector: 'parentToChild',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentToChildComponent implements OnInit {
    // !Part 1: This variable will be passed to the child component
    userLoggedIn: boolean = false

    toggleLoginStatus() {
        this.userLoggedIn = !this.userLoggedIn
    }

    isThisDisabled() {
        return this.userLoggedIn
    }

    // !End of part 1

    // !Shopping list 
    shoppingList: Ingredient[] = []

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.shoppingList = this.shoppingListService.getIngredients()
        // ! The filtered list is updated on every new item
        this.shoppingListService.ingredientsChanged.subscribe((data: Ingredient[]) => { this.shoppingList = data })
    }

    // !End of Shopping list

}
