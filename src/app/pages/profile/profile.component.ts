import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/services.index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  @ViewChild('fileInput', {static: true}) fileInput;
  fileToUpload: File = null;

  user: User;
  profileForm: FormGroup;
  userStateSubscription: Subscription;

  constructor(public userService: UserService, private loginService: LoginService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.userStateSubscription = this.loginService.getUserState().subscribe( resp => {
      this.user = resp;
    });

    this.profileForm = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, Validators.required)
    });

  }

  openFileDialog() {
    this.fileInput.nativeElement.click();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.userService.uploadUserImage(this.fileToUpload).subscribe( (updatedUser: User) => {
      localStorage.setItem('user', JSON.stringify(updatedUser));
      this.loginService.updateUserState(updatedUser);
      Swal.fire('Success!', 'Your image has been updated.' );
    });
  }

}
