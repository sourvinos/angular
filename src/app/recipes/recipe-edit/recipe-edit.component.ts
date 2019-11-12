import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ModalDialogComponent } from 'src/app/modal-dialog/modal-dialog.component';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {

    id: number

    form = this.formBuilder.group({
        id: 0,
        category: [''],
        name: [''],
        description: ['']
    })

    constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router, private modalService: BsModalService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(p => (this.id = p['id']))
    }

    ngOnInit() {
        this.populateFields()
    }

    private populateFields() {
        if (this.id) {
            this.recipeService.getRecipe(this.id).subscribe(
                result => {
                    this.form.setValue({
                        id: result.id,
                        category: result.category,
                        name: result.name,
                        description: result.description,
                    })
                },
                error => {
                    console.log('Error getting record')
                })
        }
    }

    onSave() { }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route })
    }

    canDeactivate(): any {
        if (this.form.dirty) {
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

}
