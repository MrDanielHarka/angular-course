import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'custom-property-binding2';

  serverElements = [
    { name: 'Server1', type: 'server', content: '1st content' },
    { name: 'Server2', type: 'server', content: '2nd content' },
    { name: 'Server3', type: 'blueprint', content: '3rd content' },
  ];
}
