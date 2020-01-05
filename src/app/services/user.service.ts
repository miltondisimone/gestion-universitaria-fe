import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import {URL_SERVICES} from '../config/config.js';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  registerUser(user: User) {

    const url = `${URL_SERVICES}/${user.userType}`;

    return this.http.post(url, user).pipe(
      map( (resp: any) => {
        return resp.savedUser;
      })
    );

  }
}
