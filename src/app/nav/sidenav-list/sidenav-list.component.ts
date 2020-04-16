import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output() sidenavClose = new EventEmitter<void>();  

  constructor(private authService: AuthService) { }
  
  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  loginSubscription : Subscription;

  isLogged = false;

  ngOnInit(): void {
    this.loginSubscription =  this.authService.authChange.subscribe(authret=>{
      this.isLogged = authret
    });
  }

  logout(){
    this.authService.logout();
    this.onClose();
  }

  onClose(){
    this.sidenavClose.emit();
  }

}
