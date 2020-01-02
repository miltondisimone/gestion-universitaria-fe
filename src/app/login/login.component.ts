import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private loginService: LoginService, private router: Router ) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const user = new User(
      null,
      this.loginForm.value.email,
      this.loginForm.value.password,
      this.loginForm.value.role
    );

    this.loginService.login(user).subscribe( () => {
      this.router.navigate(['/dashboard']);
    });


  }

}
