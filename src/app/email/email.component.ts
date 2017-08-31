import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private router: Router,
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
  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
       this.authService.login(formData.value.email, formData.value.password)
       .subscribe(
        success => this.router.navigate(['/posts']),
        error => alert(error)
      );
    }
  }
}
