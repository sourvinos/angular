import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { delay } from 'rxjs/operators'
import { IRecipe } from './recipe.model'
import { RecipeService } from './recipe.service'

@Injectable({ providedIn: 'root' })

// Prefetch data with resolver to avoid partial page update while waiting for the api to load the data
// Step 1 This class!
// Step 2 Add it to the routes modules
// Step 3 Modify the constructor of the list component and remove the service 
// Step 4 In the app component define the loader

export class RecipeListResolverService implements Resolve<IRecipe[]>{

    constructor(private recipeService: RecipeService) { }

    resolve(): Observable<IRecipe[]> {
        let result = this.recipeService.getRecipes().subscribe(results => result = results)
        return result
    }

}
