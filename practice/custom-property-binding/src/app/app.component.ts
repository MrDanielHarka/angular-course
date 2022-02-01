import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'custom-property-binding';

  serverElements = [
    { name: 'TestServer', type: 'server', content: 'Just a test!' },
    { name: 'Server2', type: 'blueprint', content: 'Just an other test!' },
    { name: 'Server3', type: 'server', content: 'Just an other test!' },
  ];
}
