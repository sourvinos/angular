import { FormBuilder } from '@angular/forms';
import { ToDoFormComponent } from "./form.component"

describe('ToDoFormComponent', () => {

    let component: ToDoFormComponent

    beforeEach(() => {
        component = new ToDoFormComponent(new FormBuilder)
    })

    it('Should create two controls', () => {
        expect(component.form.contains('name')).toBeTruthy()
        expect(component.form.contains('email')).toBeTruthy()
    })

    it('Should make the name control required', () => {
        let control = component.form.get('name')
        control.setValue('')
        expect(control.valid).toBeFalsy()
    })

})