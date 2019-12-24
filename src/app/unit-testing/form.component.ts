import { Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core'

@Component({
    selector: 'form',
    templateUrl: 'form.component.html'
})

export class ToDoFormComponent {

    form = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['']
    })

    constructor(private formBuilder: FormBuilder) { }

}
