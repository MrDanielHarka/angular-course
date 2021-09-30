import { Component } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: 'computer.component.html',
})
export class ComputerComponent {
  textColor: string = 'red';
  bgColor: string = 'black';
  buttonText: string = 'Turn On';
  computerStatus: string = 'off';

  onOffToggle() {
    this.textColor === 'red'
      ? (this.textColor = 'green')
      : (this.textColor = 'red');
    this.bgColor === 'black'
      ? (this.bgColor = 'white')
      : (this.bgColor = 'black');
    this.buttonText === 'Turn On'
      ? (this.buttonText = 'Turn Off')
      : (this.buttonText = 'Turn On');
    this.computerStatus === 'off'
      ? (this.computerStatus = 'on')
      : (this.computerStatus = 'off');
  }
}
