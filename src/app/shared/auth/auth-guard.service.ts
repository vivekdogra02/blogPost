import { CanActivate, Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuardService  implements CanActivate {

  constructor(private af: AngularFireAuth, private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.af.authState
    .take(1)
    .map(authState => !!authState)
    .do(authenticated => {
      if (!authenticated) {
        this.router.navigate([ '/login' ]);
      }
      });
  }
}
