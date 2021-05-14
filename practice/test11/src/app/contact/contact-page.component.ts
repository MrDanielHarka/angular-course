import { ContactService } from './contact.service';
import { Component } from '@angular/core';

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  providers: [ContactService]
})
export class ContactPageComponent {
}
