import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
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
  public name;
  constructor(private auth: AuthService, private af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe((result) => {
      if (result) {
        this.name  = result.displayName || result.email;
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
     });
   }

  ngOnInit() {
  }
  logOut() {
    this.auth.logOut();
    this.router.navigate(['/login']);
  }
}
