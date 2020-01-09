import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { URL_SERVICES } from 'src/app/config/config';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userStateSource: BehaviorSubject<User> = new BehaviorSubject(null);
  userState: Observable<User> = this.userStateSource.asObservable();

  user: User;
  token: string;

  constructor(private http: HttpClient, private router: Router) {
    this.loadStorage();
    this.userState.subscribe(userState => {
      this.user = userState;
    });
  }

  updateUserState(user: User) {
    this.userStateSource.next(user);
  }

  getUserState(): Observable<User> {
    return this.userState;
  }

  isAuthenticated() {
    return this.token;
  }

  loadStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
      this.userStateSource.next(this.user);
    } else {
      this.token = '';
      this.user = null;
    }
  }

  saveStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
  }

  login( user: User) {

    const url = URL_SERVICES + '/login';

    return this.http.post(url, user).pipe(
      map( (resp: any) => {
        this.saveStorage(resp.id, resp.token, resp.user);
        this.userStateSource.next(resp.user);
        return true;
      })
    );

  }

  logout() {
    this.user = null;
    this.token = '';

    localStorage.removeItem('id');
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    this.router.navigate(['./login']);
  }
}
