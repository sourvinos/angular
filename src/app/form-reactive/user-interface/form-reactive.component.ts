import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms'
import { PasswordValidator } from '../classes/password.validator'
import { ForbiddenNameValidator } from '../classes/username.validator'
import { ErrorStateMatcher } from '@angular/material'
import { CrossFieldErrorMatcher } from '../classes/crossFieldErrorMatcher'
// import { CrossFieldErrorMatcher } from '../classes/crossFieldErrorMatcher'

// class CrossFieldErrorMatcher implements ErrorStateMatcher {
//     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//         return control.dirty && form.invalid
//     }
// }

@Component({
    selector: 'form-reactive',
    templateUrl: './form-reactive.component.html',
    styleUrls: ['./form-reactive.component.css']
})

export class FormReactiveComponent {

    userForm: FormGroup
    errorMatcher = new CrossFieldErrorMatcher()

    constructor(private fb: FormBuilder) {
        this.initForm()
    }

    initForm() {
        this.userForm = this.fb.group({
            username: ['', Validators.required],
            passwords: this.fb.group({
                password: ['', Validators.required],
                verifyPassword: ['']
            }, { validator: PasswordValidator })
        })
    }

    // passwordValidator(form: FormGroup) {
    //     const condition = form.get('password').value !== form.get('verifyPassword').value
    //     return condition ? { passwordsDoNotMatch: true } : null
    // }
}
