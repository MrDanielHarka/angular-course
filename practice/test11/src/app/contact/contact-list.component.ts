import { ContactService } from './contact.service';
import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent {

  //Dependency Injection (DI), DI Framework: create objects, manage dependencies of objects
  constructor(public contactService: ContactService) {
  }

  contactClicked(contact: Contact) {
    this.contactService.setSelectedContact(contact);
  }
}
