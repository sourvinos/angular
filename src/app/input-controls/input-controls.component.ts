import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DescriptionValidators } from './input-controls-validators';

@Component({
	selector: 'inputs',
	templateUrl: './input-controls.component.html',
	styleUrls: ['./input-controls.component.css']
})

export class InputsComponent implements AfterViewInit {
	ngAfterViewInit(): void {
		this.focusOnElement(1)
	}

	constructor(private formBuilder: FormBuilder) { }

	getErrorMessage() {
		return 'This field is required, silly!';
	}

	fb = this.formBuilder.group({
		countryId: 0,
		description: ['', DescriptionValidators.cannotExceedMaxLength],
		profession: ['Default profession'],
		address: ['Default address'],
		date: [''],
	})

	focusOnElement(index: number) {
		var elements = document.getElementsByTagName('input')
		elements[index].select()
		elements[index].focus()
	}

	focusOnFirstElement() {
		var elements = document.getElementsByTagName('input');
		elements[0].select()
	}

	loadDateFromLocalStorage() {
		// console.log(moment(localStorage.getItem('date')))
		this.fb.patchValue({ date: localStorage.getItem('date') })
	}

	updateLocalStorage() {
		// console.log(this.fb.get('date'))
		localStorage.setItem('date', this.fb.value.date)
	}

	get profession() {
		return this.fb.get('profession');
	}

}
