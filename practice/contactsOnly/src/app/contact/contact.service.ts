import { EventEmitter, Injectable } from "@angular/core";
import { Contact } from "./contact";

@Injectable()
export class ContactService {
    
    contacts: Contact[] = [];
    clickedContact: EventEmitter<Contact> = new EventEmitter();

    constructor() {
        let contact1 = new Contact('1st Contact', 11);
        let contact2 = new Contact('2nd Contact', 22);
        let contact3 = new Contact('3rd Contact', 33);

        this.contacts.push(contact1, contact2, contact3);
    }

    setSelectedContact(contact: Contact) {
        this.clickedContact.emit(contact);
    }
}