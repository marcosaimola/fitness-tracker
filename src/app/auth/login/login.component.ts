import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', {validators: [Validators.email, Validators.required]}),
      password: new FormControl('', {validators:[Validators.required]})
    })
  }

  onSubmit(){
    this.authService.login({
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    });
    console.log(this.formLogin);
  }

}
