import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'custom-property-binding3';

  serverElements = [
    { name: '1st Server', type: 'server', content: '1st content.' },
    { name: '2nd Server', type: 'blueprint', content: '2nd content.' },
    { name: '3rd Server', type: 'server', content: '3rd content.' },
  ];
}
