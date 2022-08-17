import { Component } from "@angular/core";

@Component({
  selector: 'auth-app',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }
}