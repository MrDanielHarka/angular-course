import { Component, Input } from "@angular/core";
import { Contact } from "./contact";
import { ContactService } from "./contact.service";

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html'
})
export class ContactListComponent{
    @Input()
    contacts!: Contact[];

    constructor(public contactService: ContactService){}

    contactClicked(contact: Contact) {
        this.contactService.setSelectedContact(contact)
    }

}