import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private authService: AuthService) { }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  isLogged = false;
  authSubscription: Subscription;

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus=>{
      this.isLogged = authStatus
    });

    Subscription
  }

  onToggleSidenav()
  {
    this.sidenavToggle.emit();
  }

  logout(){
    this.authService.logout();
  }

}
