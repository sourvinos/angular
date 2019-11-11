import { BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subject } from 'rxjs';
import { ModalDialogComponent } from 'src/app/modal-dialog/modal-dialog.component';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {

    id: number
    editMode: boolean = false
    recipeForm: FormGroup

    constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router, private modalService: BsModalService) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id']
            this.editMode = params['id'] != null
            this.initForm()
        })
        this.recipeService.teacherMessage.subscribe(message => alert(message))
    }

    onSave() {
        this.recipeService.saveRecipe(this.id, this.recipeForm.value)
    }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route })
    }

    private initForm() {

        let recipeId = 0
        let recipeName = ''
        let recipeDescription = ''

        if (this.editMode) {
            let recipe = this.recipeService.getRecipe(this.id)
            recipeId = recipe.id
            recipeName = recipe.name
            recipeDescription = recipe.description
        }

        this.recipeForm = new FormGroup({
            'id': new FormControl(recipeId),
            'name': new FormControl(recipeName),
            'description': new FormControl(recipeDescription)
        })

    }

    canDeactivate(): any {
        if (this.recipeForm.dirty) {
            const subject = new Subject<boolean>()
            const modal = this.modalService.show(ModalDialogComponent, {
                initialState: {
                    title: 'Confirmation',
                    message: 'If you continue, all changes in this record will be lost.',
                    type: 'question'
                }, animated: false
            })
            modal.content.subject = subject
            return subject.asObservable()
        } else {
            return true
        }
    }

    greetStudent() {
        this.recipeService.sendMessage('Hello')
    }

}
