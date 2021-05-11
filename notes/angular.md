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

## Creating an example component

\
`1.` Creating a `contact` directory for the wanted component, in the `project/src/app` directory. _Contact_ is the example this time, hence the _contact_ naming.

\
`2.` Creating a `Contact.ts` file in `project/src/app/contact` for the class to be _exported_ and fill in the following:

```ts
export class Contact {
  public name: string;
  public phone: string;
  public email: string;
}
```

> This is the class file.

\
`3.` Creating a `contact.component.css` file in `project/src/app/contact` and _css_ will be written here later on. This is just an example:

```css
* {
  padding: 0;
  margin: 0;
}
```

> This is the css file for the contact component.

\
`4.` Creating a `contact.component.html` file in `project/src/app/contact` and fill in:

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
`5.` Creating a `contact.component.ts` file in `project/src/app/contact` and fill in:

```ts
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class Contact {
  @Input()
  contact: Contact;
}
```

> This is the ts file, which _imports_ ("collects") the templateUrl(html file), the styleUrls(css files) and exports it, with the _app-contact_ selector name.

\
`6.` Using `ctrl+space` we "connect" `contact.component.ts` with other documents, so the _import_ lines appear automatically.

> Without this the different parts of the app are not able to "talk to" each other.

\
`7.` Replacing the contents of `app.component.html` with the following:

```html
<div>
  {{title}}
  <app-contact [contact]="mainContact"></app-contact>
</div>
```

> Here mainContact is added as a name, which can be referred to by other parts of our application.

\
`8.` Adding the following to `app.component.ts` inside `export class ...`:

```ts
mainContact: Contact;

constructor() {
  this.mainContact = new Contact();
  this.mainContact.name = "Daniel Harka";
  this.mainContact.phone = "+36 30 555 XXXX";
  this.mainContact.email = "MrDanielHarka@gmail.com";
}
```

> This way the app has access to mainContact and the constructor.

\
`9.` Adding the following to `app.module.ts` inside `@NgModule`'s `declarations`:

```ts
ContactComponent;

// A comma is needed, between declarations!
```

> Now the ContactComponent is accessible for the app module.

\
...and when all this is done, then you should have a simple working app... or not.

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
