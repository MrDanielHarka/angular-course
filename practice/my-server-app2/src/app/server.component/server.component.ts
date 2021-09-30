import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls: ['server.component.css'],
})
export class ServerComponent {
  serverId: number = 22;
  serverStatus: string = 'offline';
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  messageColor: string = 'red';
  serverSum: number = 0;

  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
    this.messageColor = 'green';
    this.serverSum++;
  }
}
