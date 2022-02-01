import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: 'color.component.html',
  styleUrls: ['color.component.css'],
})
export class ColorComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'pink ';
  }
}
