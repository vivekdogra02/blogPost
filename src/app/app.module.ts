import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { AuthService } from './shared/auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { PostPageComponent } from './post-page/post-page.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { PostsService } from './shared/posts.service';
import {ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SinglePostComponent } from './posts-container/single-post/single-post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PostsContainerComponent,
    NavigationComponent,
    SinglePostComponent,
    PostPageComponent,
    UserProfileComponent,
    HomeComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
  ],
  entryComponents: [
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [PostsService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
