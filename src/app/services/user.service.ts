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

  getUserImage(userImg: string) {

    const url = `${URL_SERVICES}/image/user/${userImg}`;

    return this.http.get(url);
  }

  uploadUserImage(file: File) {

    const userId = localStorage.getItem('id');
    const url = `${URL_SERVICES}/user/upload/${userId}`;

    const formData: FormData = new FormData();
    formData.append('image', file);

    return this.http.put(url, formData).pipe(map( (resp: any) => {
      return resp.updatedUser;
    }));

  }


}


