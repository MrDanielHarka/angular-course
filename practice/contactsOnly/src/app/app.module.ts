import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list.component';
import { ContactPageComponent } from './contact/contact-page.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
