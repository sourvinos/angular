import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise'
import { Contact } from '../'

@Injectable({ providedIn: 'root' })

export class ContactService {

    private contactsUrl = 'app/contacts'
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' })

    constructor(private http: HttpClient) { }

    public getContacts(): any {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(response => JSON.stringify(response))
            .catch(this.handleError)
    }

    public async getContact(id: number): Promise<Contact> {
        return this.getContacts().then((contacts: any[]) => contacts.find(contact => contact.id === id))
    }

    public save(contact: Contact): Promise<Contact> {
        if (contact.id) {
            return this.put(contact)
        }
        return this.post(contact)
    }

    public new(contact: Contact): Promise<Contact> {
        return this.post(contact)
    }

    public delete(contact: Contact): Promise<Contact> {
        const url = `${this.contactsUrl}/${contact.id}`
        return this.http
            .delete(url)
            .toPromise()
            .then(() => null)
            .catch(this.handleError)
    }

    public post(contact: Contact): Promise<Contact> {
        return this.http
            .post(this.contactsUrl, JSON.stringify(contact))
            .toPromise()
            .then(res => JSON.stringify(res))
            .catch(this.handleError)
    }

    public put(contact: Contact): Promise<Contact> {
        const url = `${this.contactsUrl}/${contact.id}`

        return this.http
            .put(url, JSON.stringify(contact), {})
            .toPromise()
            .then(() => contact)
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error)
        return Promise.reject(error.message || error)
    }

}
