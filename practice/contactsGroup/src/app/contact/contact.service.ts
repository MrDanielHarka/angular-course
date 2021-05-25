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
        let contact4 = new Contact('4th Contact', 44);
        let contact5 = new Contact('5th Contact', 55);
        let contact6 = new Contact('6th Contact', 66);

        this.contacts.push(contact1, contact2, contact3, contact4, contact5, contact6);
    }

    setSelectedContact(contact: Contact) {
        this.clickedContact.emit(contact);
    }

}