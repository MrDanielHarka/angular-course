import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
})
export class UserComponent {
  username: string = '';
  // buttonIsEnabled = true;

  // toggleButtonState() {
  //   this.username === ''
  //     ? (this.buttonIsEnabled = false)
  //     : (this.buttonIsEnabled = true);
  // }

  // clearUsername() {
  //   this.username = '';
  // }
}
