import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { DescriptionValidators } from './input-controls-validators';

@Component({
	selector: 'inputs',
	templateUrl: './input-controls.component.html',
	styleUrls: ['./input-controls.component.css']
})
export class InputsComponent {

	constructor(private formBuilder: FormBuilder) { }

	profession = new FormControl('', [Validators.required]);
	address = new FormControl('', [Validators.required]);

	getErrorMessage() {
		return 'This field is required!';
	}

	form = this.formBuilder.group({
		countryId: 0,
		description: ['', DescriptionValidators.cannotExceedMaxLength]
	})

}
