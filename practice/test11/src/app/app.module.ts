import { ContactPageComponent } from './contact/contact-page.component';
import { ContactListComponent } from './contact/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
