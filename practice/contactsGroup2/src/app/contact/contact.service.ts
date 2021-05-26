import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactService {
  contacts: Contact[] = [];

  constructor() {
    let contact1 = new Contact('Name1', '11', 'name1@mail.com');
    let contact2 = new Contact('Name2', '22', 'name2@mail.com');
    let contact3 = new Contact('Name3', '33', 'name3@mail.com');

    this.contacts.push(contact1, contact2, contact3);
  }
}
