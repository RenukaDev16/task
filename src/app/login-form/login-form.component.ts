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
  Loginuser(uname: string, pwd: string) {
   if ( uname === 'renuka' && pwd === 'renuka') {
 this.router.navigate(['/dashboard']);
  }
}

}
