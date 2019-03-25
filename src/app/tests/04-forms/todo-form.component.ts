import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class TodoFormComponent {

  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      email: [''],
    });
  }

} 