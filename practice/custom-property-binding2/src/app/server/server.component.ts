import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [],
})
export class ServerComponent implements OnInit {
  @Input() element!: { name: string; type: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
