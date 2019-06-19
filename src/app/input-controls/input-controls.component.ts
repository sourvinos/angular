import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DescriptionValidators } from './input-controls-validators';

@Component({
	selector: 'inputs',
	templateUrl: './input-controls.component.html',
	styleUrls: ['./input-controls.component.css']
})

export class InputsComponent implements OnInit {

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.focusOnFirstElement()
	}

	profession = new FormControl('Developer', [Validators.required]);
	address = new FormControl('Corfu', [Validators.required]);
	something = new FormControl('Something else', [Validators.required]);

	getErrorMessage() {
		return 'This field is required!';
	}

	form = this.formBuilder.group({
		countryId: 0,
		description: ['', DescriptionValidators.cannotExceedMaxLength]
	})

	focusOnFirstElement() {
		var elements = document.getElementsByTagName('input');
		elements[0].select()
	}

}
