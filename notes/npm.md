Creating a new project:

```shell
$ ng new file-name
```

Asks if we want to use routing.

```shell
$ n
```

css?

```shell
$ y
```

Live update:

```shell
$ ng serve
```

We create a folder for the wanted component, in the **"project/src/app/contact"** folder. **Contact** is the example this time.

Then we create a **"Contact.ts"** file for the class to be **exported** and fill in the following:

```ts
export class Contact {
  public name: string;
  public phone: string;
  public email: string;
}
```

Then we create a **"contact.component.html"** file in **"project/src/app/contact"** and fill in:

```html
<div>
  <div>Contact</div>
  <div>{{contact.name}}</div>
  <div>{{contact.phone}}</div>
  <div>{{contact.email}}</div>
</div>
```

Then we create a **"contact.component.ts"** file in **"project/src/app/contact"** and fill in:

```ts
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactListComponent {
  @Input()
  contacts: Contact[];
}
```

We need to "connect" **"contact.components.ts"** with Component.ts and contact.components.ts so the import appears automatically.

Replaced the contents of **"app.component.html"** with the following:

```html
<div>
  {{title}}

  <app-contact [contact]="mainContact"></app-contact>
</div>
```

Added the following to the contents to **"app.component.ts"**:

```ts
...
```

Top be explained later:

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

<app-contact></app-contact>

1 kontaktot

contact list component
