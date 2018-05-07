import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {

  }
  user = {
    login: '',
    pass: ''
  };
  error = false;

  ngOnInit() {
  }
  onSubmit = (e: NgForm) => {
    if (this.user.login === 'root' && this.user.pass === 'root') {
      this.router.navigate(['invoices']);
    } else {
      this.error = true;
    }
  }
}
