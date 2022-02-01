import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemCreationStatus = 'No server was created!';
  itemName = '';
  itemCreated = false;
  items: string[] = [];

  onCreateItem() {
    this.itemCreated = true;
    this.itemCreationStatus = this.itemName;
    this.items.push(this.itemName);
    this.itemName = '';
  }
}
