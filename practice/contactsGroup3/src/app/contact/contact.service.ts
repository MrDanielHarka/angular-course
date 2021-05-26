import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactService {
  contacts: Contact[] = [];
  clickedContact: EventEmitter<Contact> = new EventEmitter();

  constructor() {
    let contact1 = new Contact('Name1', '+11', 'name1@gmail.com');
    let contact2 = new Contact('Name2', '+22', 'name2@gmail.com');
    let contact3 = new Contact('Name3', '+33', 'name3@gmail.com');

    this.contacts.push(contact1, contact2, contact3);
  }

  setSelectedContact(contact: Contact) {
    this.clickedContact.emit(contact);
  }
}
