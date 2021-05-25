import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list.component';
import { ContactPageComponent } from './contact/contact-page.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { GroupListComponent } from './group/group-list.component';
import { GroupPageComponent } from './group/group-page.component';
import { GroupComponent } from './group/group.component';
import { GroupService } from './group/group.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactComponent,
    GroupListComponent,
    GroupPageComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
