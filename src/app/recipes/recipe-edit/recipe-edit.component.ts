import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

    id: number
    editMode: boolean = false
    recipeForm: FormGroup

    constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

    ngOnInit() {
        // Step 5/5
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id']
            this.editMode = params['id'] != null
            this.initForm()
        })
    }

    onSubmit() {
        console.log(this.recipeForm)
    }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route })
    }

    private initForm() {

        let recipeName = ''
        let recipeDescription = ''

        if (this.editMode) {
            let recipe = this.recipeService.getRecipe(this.id)
            recipeName = recipe.name
            recipeDescription = recipe.description
        }

        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName),
            'description': new FormControl(recipeDescription)
        })

    }

    canDeactivate(): any {
        console.log(this.recipeForm.dirty)
        if (this.recipeForm.dirty) {
            if (confirm('Exit')) {
                return true
            }
        } else {
            return true
        }
    }

}
