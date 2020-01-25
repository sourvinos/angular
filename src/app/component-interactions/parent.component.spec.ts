import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {

    let component: ParentComponent

    beforeEach(() => {
        component = new ParentComponent()
    })

    it('Should assign true to the userLoggedIn property', () => {
        let result = component.login()
        expect(result).toBeTruthy()
    })

    it('Should assign false to the userLoggedIn property', () => {
        let result = component.logout()
        expect(result).toBeFalsy()
    })

})