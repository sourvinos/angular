import { ContactsComponent } from "./contacts.component"
import { Contact } from './contact.model'

describe('Contacts component', () => {

    let contactsComponent: ContactsComponent = null

    beforeEach(() => {
        contactsComponent = new ContactsComponent()
    })

    it('Should create an instance', () => {
        expect(contactsComponent).not.toBeNull()
    })

    it('Should have an empty array of contacts', () => {
        expect(contactsComponent.contacts.length).toBe(0)
    })

    it('Should add a contact to the contacts array', () => {
        let contact: Contact = {
            id: 1,
            name: 'John'
        }
        contactsComponent.contacts.push(contact)
        expect(contactsComponent.contacts.length).toBe(1)
    })

    afterEach(() => {
        contactsComponent = null
    })

})