import { Component } from "@angular/core";
import { ContactService } from "./contact.service";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent{

  constructor(public contactService: ContactService){}
}