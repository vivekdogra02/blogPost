import * as firebase from 'firebase/app';

import {AngularFireAuth} from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }
  loginWithGoggle() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch( error => error);
  }
  loginWithFb() {
    this.afAuth.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .catch( error => error);
  }
  login(email, password): Observable<any> {
    return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }
  isAuthenticate(): Observable<boolean> {
    return this.user.map(user => user && user.uid !== undefined);
  }
  logOut() {
    return this.afAuth.auth.signOut();
  }
}
