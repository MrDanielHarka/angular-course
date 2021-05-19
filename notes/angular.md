# New project and module in Angular

## Creating a new project and live update

\
Writing the following in shell/bash:

```shell
# ng new my-project
```

Asks if we want to use routing.

```shell
# n
```

css?

```shell
# y
```

Initializing live update:

```shell
# ng serve
```

Opening live update in browser:

```shell
# go
```

...or copying the given address to our browser.

## Creating an example component

\
`1.` Creating a `contact` directory for the wanted component, in the `project/src/app` directory. _Contact_ is the example this time, hence the _contact_ naming.

\
`2.` Creating a `contact.ts` file in `project/src/app/contact` for the class to be _exported_ and filling in the following:

```ts
export class Contact {
  public name: string;
  public phone: string;
  public email: string;
}
```

> This is the class file.

\

`3.` Adding the following to `app.component.ts` inside `export class`:

```ts
mainContact: Contact;

constructor() {
  this.mainContact = new Contact();
  this.mainContact.name = 'Daniel Harka';
  this.mainContact.phone = '+36 30 555 XXXX';
  this.mainContact.email = 'MrDanielHarka@gmail.com';
}
```

> This way the app has access to mainContact and the constructor.

\
`4.` Creating a `contact.component.css` file in `project/src/app/contact` and _css_ will be written here later on. This is just an example:

```css
* {
  padding: 0;
  margin: 0;
}
```

> This is the css file for the contact component.

\
`5.` Creating a `contact.component.ts` file in `project/src/app/contact` and filling in:

```ts
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  @Input()
  contact: Contact;
}
```

> This is the ts file, which _imports_ ("collects") the templateUrl(html file), the styleUrls(css files) and exports it with the _app-contact_ selector name.

\
`6.` Using `ctrl+space` we "connect" `contact.component.ts` with other documents, so the _import_ lines appear automatically.

> Without this the different parts of the app are not able to "talk to" each other.

\
`7` Adding the following to `app.module.ts` inside `@NgModule`'s `declarations`:

```ts
ContactComponent;

// A comma is needed between declarations!
```

> Now the ContactComponent is accessible for the app module, if we connect with ctrl+space.

\
`8.` Creating a `contact.component.html` file in `project/src/app/contact` and filling in:

```html
<div>
  <div>Contact</div>
  <div>{{contact.name}}</div>
  <div>{{contact.phone}}</div>
  <div>{{contact.email}}</div>
</div>
```

> This is the html file for the contact component.

\
`9.` Replacing the contents of `app.component.html` with the following:

```html
<div>
  {{title}}
  <app-contact [contact]="mainContact"></app-contact>
</div>
```

> Here mainContact is added as a name, which can be referred to by other parts of our application.

\
...and when all this is done, then we should have a simple, working app.

\
`10.` Editing `app.component.ts` and adding this below `mainContact`:

```ts
allContacts: Contact[] = [];
private contact1: Contact;
private contact2: Contact;
private contact3: Contact;
```

> This will make an array with the Contact class, where our contacts will be _pushed_.

\
`11.` Changing constructor to this:

```ts
constructor() {
  // mainContact is changed to contact1 to be consistent!
  this.contact1 = new Contact();
  this.contact1.name = 'Daniel Harka';
  this.contact1.phone = '+36 30 555 XXXX';
  this.contact1.email = 'MrDanielHarka@gmail.com';

  this.contact2 = new Contact();
  this.contact2.name = 'Sara Harka';
  this.contact2.phone = '+36 20 615 XXXX';
  this.contact2.email = 'MrsSaraHarka@gmail.com';

  this.contact3 = new Contact();
  this.contact3.name = 'David Harka';
  this.contact3.phone = '+47 90 753 XXX ';
  this.contact3.email = 'MrDavidHarka@gmail.com';

  // Pushing the contacts to the allContacts array.
  this.allContacts.push(this.contact1, this.contact2, this.contact3);

  // Since our chosen/main contact is referenced to as "mainContact", contact1 is assigned to mainContact.
  this.mainContact = this.contact1;
}
```

> Changing main contact to contact1 and pushing the contacts to the allContacts array.

\
`12.` Creating the following files in `project/src/app/contact`:

- `contact-list.component.css`
- `contact-list.component.html`
- `contact-list.component.ts`

> Creating files for our new component.

\
`13.` Adding the following to `contact-list.component.ts`:

```ts
@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"],
})
export class ContactListComponent {
  @Input()
  // Be aware of the "s" in contacts!
  contacts: Contact;
}
```

> This is the ts file, which imports ("collects") the templateUrl(html file), the styleUrls(css files) and exports it with the app-contact-list selector name.

\
`14.` Adding the following to `contact-list.component.html`:

```html
<ul>
  <li *ngFor="let contact of contacts">
    {{contact.name}} {{contact.phone}} {{contact.email}}
  </li>
</ul>
```

> Importing contacts as a list.

\
`15.` Adding the following to `app.module.ts` inside `@NgModule`'s `declarations`:

```ts
ContactListComponent;

// A comma is needed between declarations!
```

> Now the ContactComponent is accessible for the app module.

\
`16.` Adding the following to `app.component.html`:

```html
<app-contact-list [contacts]="allContacts"></app-contact-list>
```

> Here app-contact-list is embedded.

\

|

|

|

|

|

|

|
\
To be explained later:

```html
<ng-container>
{{object.var}}
</ng-container>

<ng-container ngif="data.korte == 'asdasd'">
{{object.var}}
</ng-container>

<ng-container i18n="id@@>
asdasd
</ng-container>

{{data.contacts[0].name}}
```

````

contact-list.component.html

```html
<li (click)="contactClicked(contact)">
````

```ts
@Output()
selectContact: new EventEmitter<Contact>();

contactClicked(contact: Contact) {
  this.selectContact.emit(contact);
}
```

app-component.html

```html
<app-contact-list (selectContact)="contactSelected($event)"></app-contact-list>
```

app.component.ts

```ts
contactSelected(contact: Contact) {
this.selectedContact = contact
}
```
