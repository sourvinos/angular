import { UserService } from './user.service';
import { UserListComponent } from './user-list.component';
import { from } from 'rxjs';

describe('UserListComponent', () => {

	// Init
	let service: UserService;
	let component: UserListComponent;

	beforeEach(() => {
		service = new UserService(null); // The constructor expects arguments, we are passing 'null'
		component = new UserListComponent(service);
	})

	// Test #1 - ngOnInit()
	it('Should get results from the server', () => {
		// Arrange
		// callFake() = call to the getUsers() with no parameters
		spyOn(service, 'getUsers').and.callFake(() => {
			return from([[
				{
					'firstName': 'Jane',
					'lastName': 'Doe'
				},
				{
					'firstName': 'John',
					'lastName': 'Doe'
				}
			]])
		});
		// Act
		component.ngOnInit();
		// Assert
		expect(component.users.length).toBe(2);
	})

	// Test #2 - Filters - TODO

})