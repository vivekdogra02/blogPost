import { AuthGuardService } from './shared/auth/auth-guard.service';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import {Route} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
export const ROUTES: Route[] = [
    {
        path: 'posts',
        children: [
            {path: '', component: PostsContainerComponent},
            {path: ':id', component: PostPageComponent}
        ],
        canActivate: [AuthGuardService]
    },
    {
        path: 'users',
        children: [
            {path: ':username', component: UserProfileComponent}
        ]
    },
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
