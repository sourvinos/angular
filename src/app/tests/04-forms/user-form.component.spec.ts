import { UserFormComponent } from './user-form.component';
import { UserService } from './user.service';
import { empty, Observable } from 'rxjs';

describe('UserFormComponent', () => {

	// Init
	let service: UserService;
	let component: UserFormComponent;

	beforeEach(() => {
		service = new UserService(null);
		component = new UserFormComponent(service, null, null, null);
	})

	it('Should call the server when a new item is added', () => {
		// Arrange
		let spy = spyOn(service, "addUser").and.callFake(() => {
			return empty();
		});
		// Act
		component.save();
		// Assert
		expect(spy).toHaveBeenCalled();
	});
})