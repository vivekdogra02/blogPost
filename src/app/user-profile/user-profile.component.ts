import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../shared/model/post';
import { PostsService } from '../shared/posts.service';
import { User } from '../shared/model/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user$: Observable<User>;
  public posts$: Observable<Post[]>;
  private username;
  constructor(private postService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user$ = this.route.params.switchMap(param => {
      this.username = param['username'];
      this.getPosts(this.username, {
        query: {
          limitToFirst: 3
        }
      });
      return this.postService.findUserByUsername(this.username);
    });
  }

  getPosts(username, query) {
    this.posts$ = this.postService.getPostByUsername(username, query);
  }

   nextPosts() {
    this.posts$.subscribe(posts => {
      const startAt = posts[posts.length - 1].$key;
      this.getPosts(this.username, {
        query: {
          orderByKey: true,
          limitToFirst: 3,
          startAt
        }
      });
    });
   }

}
