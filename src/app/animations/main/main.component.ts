import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

	private windowWidth = document.body.clientWidth

	ngOnInit() {
		document.getElementById("content").style.marginLeft = "200px"
	}

	toggleMenu() {
		document.getElementById("content").style.marginLeft = document.getElementById("content").style.marginLeft == "200px" ? (this.windowWidth - this.windowWidth * 2) - 200 + "px" : "200px"
	}

}
