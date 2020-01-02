import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/services.index';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private loginService: LoginService) { }

  areEquals( field1: string, field2: string ) {
    return (group: FormGroup) => {
      const pass1 = group.controls[field1].value;
      const pass2 = group.controls[field2].value;

      if (pass1 === pass2) {
        return null;
      }
      return {
        areNotEquals: true
      };
    };
  }

  registerUser() {

    if (this.registerForm.invalid) {
      return;
    }

    const user = new User(
      this.registerForm.value.name,
      this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.role
    );

    this.userService.registerUser(user).subscribe( () => {
      swal('Registration complete!', 'You can log in now!', 'success');
      this.router.navigate(['/login']);
    });

  }

  ngOnInit() {

    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      role: new FormControl('STUDENT_ROLE', Validators.required),
    }, { validators: this.areEquals( 'password', 'password2') });

  }


}
