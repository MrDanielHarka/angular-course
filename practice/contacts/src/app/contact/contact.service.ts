import { EventEmitter, Injectable } from "@angular/core";
import { GroupService } from "../group/group.service";
import { Contact } from "./contact";

@Injectable()
export class ContactService {
    contacts: Contact[] = [];

    contactSelected = new EventEmitter<Contact>();

    constructor(groupService: GroupService) {
        let contact1 = new Contact('Contact1', '+11 111 1111', 'contact1@mail.com');
        let contact2 = new Contact('Contact2', '+22 222 2222', 'contact2@mail.com');
        let contact3 = new Contact('Contact3', '+33 333 3333', 'contact3@mail.com');
        let contact4 = new Contact('Contact4', '+44 444 4444', 'contact4@mail.com');

        groupService.create('Contact Group 1', 'Description of Contact Group 1', contact1, contact2, contact3);
        groupService.create('Contact Group 2', 'Description of Contact Group 2', contact1, contact2, contact3);
        groupService.create('Contact Group 3', 'Description of Contact Group 3', contact1, contact2, contact3);

        this.contacts.push(contact1, contact2, contact3, contact4);
    }

    setSelectedContact(contact: Contact){
        this.contactSelected.emit(contact);
    }
}