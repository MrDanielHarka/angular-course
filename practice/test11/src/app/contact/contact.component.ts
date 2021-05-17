import { ContactService } from './contact.service';
import { Contact } from './contact';
import { Component } from '@angular/core';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent {
  contact: Contact;

  constructor(contactService: ContactService) {
    contactService.contactSelected.subscribe(contact => {
      this.contact = contact;
    })
  }
}
