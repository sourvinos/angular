import { EmployeeService } from './../services/employee.service';
import { Component, OnInit, OnDestroy, NgModule, DoCheck } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { employee } from '../employees/models/employees';
import { photo } from '../employees/models/photo';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, DoCheck {

	albumId: number
	currentAlbumId: number

	employees: employee[]
	photos: photo[]

	constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
		this.route.params.subscribe((params: Params) => { this.albumId = +params['albumId'] })
		console.log('albumId from URL', this.albumId)
		this.currentAlbumId = this.albumId
		// this.photos = this.route.snapshot.data['employeeList'] // Use this with the resolver

	}

	ngOnInit(): void {
		console.log('On init')
		this.photos = this.route.snapshot.data['employeeList'] // Use this with the resolver
		// this.employeeService.getPhotos(this.albumId).subscribe((result) => {
		// 	this.photos = result
		// })
	}

	ngDoCheck(): void {
		console.log('Checking:', this.albumId)
		if (this.albumId != this.currentAlbumId) {
			this.route.params.subscribe((params: Params) => { this.albumId = +params['albumId'] })
			console.log('Will refresh: Old: ', this.currentAlbumId, ' New: ', this.albumId)
			this.currentAlbumId = this.albumId
			this.photos = this.route.snapshot.data['employeeList'] // Use this with the resolver
			// this.employeeService.getPhotos(this.albumId).subscribe((result) => {
			// 	this.photos = result
			// })
			console.log('After refresh: Old: ', this.currentAlbumId, ' New: ', this.albumId)

		}
		// console.log('albumId from URL', this.albumId)
		// this.employeeService.getPhotos(this.albumId).subscribe((result) => {
		// 	this.photos = result
		// })
	}

}