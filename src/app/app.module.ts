import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { PostPageComponent } from './post-page/post-page.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { PostsService } from './shared/posts.service';
import {ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import { SinglePostComponent } from './posts-container/single-post/single-post.component';
import { environment } from './../environments/environment';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsContainerComponent,
    NavigationComponent,
    SinglePostComponent,
    PostPageComponent,
    UserProfileComponent,
  ],
  entryComponents: [
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
