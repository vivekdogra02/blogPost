import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public auth: AuthService, private af: AngularFireAuth, private router: Router) { 
    this.af.authState.subscribe(
      (result) => {
        if (result ) {
           this.router.navigate(['/posts']);
        }
      });
  }

  ngOnInit() {
  }
  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
       this.auth.signUpUser(formData.value.email, formData.value.password)
       .subscribe(
        success => this.router.navigate(['/posts']),
        error => alert(error)
      );
    }
  }
}
