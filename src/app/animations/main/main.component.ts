import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

	private windowWidth = document.body.clientWidth

	ngOnInit() {
		document.getElementById("content").style.marginLeft = "0px"
	}

	toggleMenu() {
		document.getElementById("content").style.marginLeft = document.getElementById("content").style.marginLeft == "0px" ? (this.windowWidth - this.windowWidth * 2) + "px" : "0px"
	}

}
