import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginUser(uname: string, pwd: string) {
   if ( uname === 'renuka' && pwd === 'renuka') {
    localStorage.setItem('key', JSON.stringify([])); // initallykey is empty atfirst login
    // which redirectagainto login bylogicof appdashboad so set sumvalue
        this.router.navigate(['/home']);
  }
}

}
