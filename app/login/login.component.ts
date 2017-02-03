import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'myapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginService: LoginService;

  constructor(loginService: LoginService, private router:Router) {
    this.loginService = loginService;
  }

  signIn(userName: string, password: string) {
    if (this.loginService.validateCredentials(userName, password)) {
      this.router.navigate(['/dashboard']);
    }
  }

}
