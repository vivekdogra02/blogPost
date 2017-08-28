import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SinglePostComponent } from './posts-container/single-post/single-post.component';
import { PostsService } from './shared/posts.service';
import {AngularFireModule} from 'angularfire2';


@NgModule({
  declarations: [
    AppComponent,
    PostsContainerComponent,
    NavigationComponent,
    SinglePostComponent,
  ],
  entryComponents: [
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
