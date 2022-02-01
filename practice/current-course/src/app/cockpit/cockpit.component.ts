import { Component, EventEmitter, Output, ViewChild } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styles: [],
})
export class CockpitComponent {
  // newServerName = "";
  // newServerContent = "";

  // @ViewChild(CockpitComponent, { static: true }) serverContentInput;
  @ViewChild("serverContentInput", { static: true }) serverContentInput;
  // serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
