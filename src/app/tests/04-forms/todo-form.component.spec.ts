import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {

  var component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  // Test #1
  it('Should return two controls', () => {
    expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('email')).toBe(true);
  });

  // Test #2
  it('Name is required', () => {
    // Arrange
    var control = component.form.get('name');
    // Act
    control.setValue('');
    // Assert
    expect(control.valid).toBeFalsy();

  });

});