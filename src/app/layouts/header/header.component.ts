import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/services.index';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  user: User;
  userStateSubscription: Subscription;

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.userStateSubscription = this.loginService.getUserState().subscribe( resp => {
      this.user = resp;
    });

  }

}
