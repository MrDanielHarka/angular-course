import { Component } from "@angular/core";
import { Contact } from "./contact";
import { ContactService } from "./contact.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent{
    contact!: Contact;

    constructor(contactService: ContactService) {
        contactService.clickedContact.subscribe(contact => {this.contact = contact});}
}