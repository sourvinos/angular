import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

	ngOnInit(): void {
		var left = document.getElementById("left");
		var right = document.getElementById("right");
		left.style.width = "100vw"
		right.style.width = "0"
		// sidebar.style.width = "0"
		// form.style.width = "100vw"
	}

	toggleMenu() {
		var left = document.getElementById("left");
		var right = document.getElementById("right");
		left.style.width = left.style.width == "100vw" ? "0" : "100vw";
		right.style.width = right.style.width == "100vw" ? "0" : "100vw";
	}

}
