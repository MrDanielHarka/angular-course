import { Component } from "@angular/core";
import { Contact } from "./contact";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent {

    @Input()
    contact: Contact;

    constructor(contactService: ContactService) {
        contactService.contactSelected.subscribe(contact => this.contact = contact)
    }
}