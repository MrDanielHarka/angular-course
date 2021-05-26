import { EventEmitter, Injectable } from "@angular/core";
import { Contact } from "./contact";

@Injectable()
export class ContactService{
    contacts: Contact[]=[];
    clickedContact: EventEmitter<Contact> = new EventEmitter();

    constructor(){
        let contact1 = new Contact('Name1', '111', 'name1@mail.com');
        let contact2 = new Contact('Name2', '222', 'name2@mail.com');
        let contact3 = new Contact('Name3', '333', 'name3@mail.com');

        this.contacts.push(contact1, contact2, contact3);
    }

    setSelectedContact(contact: Contact){
        this.clickedContact.emit(contact)
    }
}