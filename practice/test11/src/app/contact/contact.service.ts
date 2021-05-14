import { Contact } from './contact';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class ContactService {
  allContacts: Contact[] = [];
  contactSelected = new EventEmitter<Contact>();

  constructor() {
    let contact1 = new Contact();
    contact1.name = "name1";
    contact1.phone = "123456798";
    contact1.email = "name1@gmail.com";

    let contact2 = new Contact();
    contact2.name = "name2";
    contact2.phone = "123456798";
    contact2.email = "name2@gmail.com";

    let contact3 = new Contact();
    contact3.name = "name3";
    contact3.phone = "123456798";
    contact3.email = "name3@gmail.com";

    this.allContacts.push(contact1, contact2, contact3);
  }

  setSelectedContact(contact: Contact) {
    this.contactSelected.emit(contact);
  }
}
