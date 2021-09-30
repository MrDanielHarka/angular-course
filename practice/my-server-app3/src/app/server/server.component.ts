import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css'],
})
export class ServerComponent {
  serverStatus: string = 'offline';
  textColor: string = 'red';
  onToggle = true;
  offToggle = false;

  turnOn() {
    this.serverStatus = 'online';
    this.textColor = 'green';
    this.onToggle = false;
    this.offToggle = true;
  }

  turnOff() {
    this.serverStatus = 'offline';
    this.textColor = 'red';
    this.offToggle = false;
    this.onToggle = true;
  }
}
