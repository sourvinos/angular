import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { IUser } from './user';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

	users: IUser[];
	filteredUsers: IUser[];

	constructor(private service: UserService) { }

	ngOnInit() {
		this.service.getUsers().subscribe(response => {
			this.users = response
			console.log(this.users)
		}, (error: any) => console.log(error));
	}

	filter(query: string) {
		this.filteredUsers = query ? this.users.filter(p => p.firstName.toLowerCase().includes(query.toLowerCase())) : this.users;
	}

}
