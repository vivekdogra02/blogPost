import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public isLoggedIn;
  constructor(private auth: AuthService, private router: Router) {
    auth.isAuthenticate().subscribe(
      success => this.isLoggedIn = success);
   }

  ngOnInit() {
  }
  logOut() {
    this.auth.logOut();
    this.router.navigate(['/login']);
  }
}
