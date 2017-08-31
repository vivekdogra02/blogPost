import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// for auth
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  error: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private af: AngularFireAuth) {

      this.af.authState.subscribe(
        (auth) => {
          if (auth ) {
             this.router.navigate(['/posts']);
          }
        });
     }

  ngOnInit() {
  }

  // login() {
  //   const inputValue = this.form.value;
  //   console.log(inputValue);
  // this.authService.login(inputValue.email, inputValue.password)
  //   .subscribe(
  //     success => this.router.navigate(['/posts']),
  //     error => alert(error)
  //   );
  // }
  loginWithGoogle() {
    this.authService.loginWithGoggle().subscribe(
      success => this.router.navigate(['/posts']),
      error => alert(error)
    );
  }

loginWithFb() {
  this.authService.loginWithFb().subscribe(
    success => this.router.navigate(['/posts']),
    error => alert(error)
  );
}
}
