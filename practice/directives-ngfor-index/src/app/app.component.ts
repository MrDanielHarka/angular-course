import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showDetails = false;
  log: any[] = [];

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    this.log.push(new Date());
  }
}
