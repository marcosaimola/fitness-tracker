import { Subject } from 'rxjs/Subject';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService{

    constructor(private router: Router){}

    authChange = new Subject<boolean>();
    private user: User;

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authSuccess();
    }

    login(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authSuccess()
    }

    logout(){
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(["/login"]);
    }

    getUser(){
        return {...this.user};
    }

    isAuth()
    {
        return this.user != null;
    }

    authSuccess(){
        this.authChange.next(true);
        this.router.navigate(["/training"]);
    }
}