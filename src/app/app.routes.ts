import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import {Route} from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
export const ROUTES: Route[] = [
    {path: 'posts',
    children: [
        {path: '', component: PostsContainerComponent},
        {path: ':id', component: PostPageComponent}

    ]
    },
    {path: 'users',
    children: [
        {path: ':username', component: UserProfileComponent}

    ]
    },
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/posts', pathMatch: 'full'}
];