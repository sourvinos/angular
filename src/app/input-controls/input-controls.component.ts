import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, HostListener } from "@angular/core";
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DescriptionValidators } from './input-controls-validators';

@Component({
	selector: 'inputs',
	templateUrl: './input-controls.component.html',
	styleUrls: ['./input-controls.component.css']
})

export class InputsComponent implements OnInit {

	ngOnInit(): void {
		document.getElementById('profession').focus()
	}

	private index: number = 1

	@HostListener('document:keydown', ['$event']) anyEvent(event: { altKey: any; shiftKey: any; key: { toUpperCase: { (): string; (): string; (): string; (): string; (): string; }; }; }) {

		// console.log(event.key)

		if (event.altKey && event.shiftKey) {
			if (event.key.toUpperCase() == 'N') {
				console.log("New")
			}
			if (event.key.toUpperCase() == 'D') {
				console.log("Delete")
			}
			if (event.key.toUpperCase() == 'F') {
				console.log("Find")
			}
			if (event.key.toUpperCase() == 'P') {
				console.log("Print")
			}
			if (event.key.toUpperCase() == 'S') {
				console.log("Save")
			}
		}

	}

	captureInputKeys(event: { key: string; target: any; srcElement: any; currentTarget: any; }) {

		// console.log(event)

		if (event.key == 'Enter' || event.key == 'ArrowDown') {
			var nextTab = +(event.target.getAttribute('tabindex')) + 1
			console.log(nextTab)
			var elements = document.getElementsByTagName('input');
			for (var i = elements.length; i--;) {
				if (nextTab > elements.length) nextTab = 1
				if (parseInt(elements[i].getAttribute('tabindex')) == nextTab) { elements[i].focus(); break }
			}
		}

		if (event.key == 'ArrowUp') {
			var previousTab = event.target.getAttribute('tabindex') - 1
			var elements = document.getElementsByTagName('input');
			for (var i = elements.length; i--;) {
				if (previousTab == 0) previousTab = elements.length
				if (+(elements[i].getAttribute('tabindex')) == previousTab) { elements[i].focus(); break }
			}

		}
	}

	constructor(private formBuilder: FormBuilder) { }

	profession = new FormControl('', [Validators.required]);
	address = new FormControl('', [Validators.required]);
	something = new FormControl('', [Validators.required]);

	getErrorMessage() {
		return 'This field is required!';
	}

	form = this.formBuilder.group({
		countryId: 0,
		description: ['', DescriptionValidators.cannotExceedMaxLength]
	})

}
