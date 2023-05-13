import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}

  get getUsername() {
    return this.loginForm.controls['username'];
  }
  get getPassword() {
    return this.loginForm.controls['password'];
  }
  login(e: Event) {
    e.preventDefault();
    if (this.loginForm.status == 'VALID') {
      console.log(this.loginForm.value);
    } else {
      console.log('Please enter valid data');
    }

    // console.log(this.getUsername.hasError('required'));
    // console.log(this.getUsername.hasError('minlength'));
  }
}
