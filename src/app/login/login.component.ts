import {Component, inject} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  AuthentificationIsFailed: boolean = false;
  AuthentificationIsSuccess: boolean = false;

  login(username: string, password: string) {
    if (username == 'user' && password == 'password') {
      this.authService.isAuthenticated = true;
      this.AuthentificationIsSuccess = true;
      this.AuthentificationIsFailed = false;
    } else {
      this.authService.isAuthenticated = false;
      this.AuthentificationIsFailed = true;
      this.AuthentificationIsSuccess = false;
    }
  }
  logout(){
    this.authService.isAuthenticated = false;
    this.AuthentificationIsFailed = false;
    this.AuthentificationIsSuccess = false;
  }
}
