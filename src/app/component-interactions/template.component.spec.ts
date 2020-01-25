import { TemplateComponent } from './template.component';

describe('TemplateComponent', () => {

    let component: TemplateComponent

    beforeEach(() => {
        component = new TemplateComponent()
    })

    it('Should increment the count property by one', () => {
        component.incrementCount()
        expect(component.count).toBe(1)
    })

    it('Should return false when the password is less or equal than four characters', () => {
        let result = component.checkForPasswordChanges('abcd')
        expect(result).toBeFalsy()
    })

    it('Should return true when the password is greater than four characters', () => {
        let result = component.checkForPasswordChanges('abcde')
        expect(result).toBeTruthy()
    })

})