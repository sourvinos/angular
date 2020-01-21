import ContactClass from "./contact"

describe('Contact class', () => {

    let contact: ContactClass = null

    beforeEach(() => {
        contact = new ContactClass()
    })

    it('Should have a valid constructor', () => {
        expect(contact).not.toBeNull()
    })

    it('Should set name correctly through constructor', () => {
        contact = new ContactClass('Liz')
        expect(contact.name).toEqual('Liz')
    })

    it('Should set and get id', () => {
        contact.id = 1
        expect(contact.id).toBe(1)
    })

    it('Should set and get name', () => {
        contact.name = 'Joe'
        expect(contact.name).toBe('Joe')
    })

    it('Should set and get email', () => {
        contact.email = 'email@email.com'
        expect(contact.email).toBe('email@email.com')
    })

    it('Should set and get number', () => {
        contact.number = '1234 5678'
        expect(contact.number).toBe('1234 5678')
    })

    it('Should set and get country', () => {
        contact.country = 'US'
        expect(contact.country).toBe('US')
    })

    it('Should set and get favorite', () => {
        contact.favorite = true
        expect(contact.favorite).toBeTruthy()
    })

    afterEach(() => {
        contact = null
    })

})