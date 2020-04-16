import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  this.maxDate = new Date();
  this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  
  }
  
  onSubmit(ngForm: NgForm){
    this.authService.registerUser({
      email: ngForm.value.email,
      password: ngForm.value.password
    });
    console.log(ngForm);
  }

}
