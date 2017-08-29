import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../shared/model/post';
import { PostsService } from '../shared/posts.service';
import { User } from '../shared/model/User';
import { PostsPaginationService } from '../shared/posts/posts-pagination.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [PostsPaginationService]
})
export class UserProfileComponent implements OnInit {

  public user$: Observable<User>;
  public posts$: Observable<Post[]> = this.postPaginationService.post$;
  private username;
  constructor(private postService: PostsService, private route: ActivatedRoute,
  private postPaginationService: PostsPaginationService) { }

  ngOnInit() {
    this.user$ = this.route.params.switchMap(
      param => this.postService.findUserByUsername(param['username']))
      .publishReplay().refCount();
      this.user$.subscribe(user => this.getPosts(user.$key));
  }

  getPosts(userKey) {
    this.postPaginationService.loadFirstPage(userKey);
  }

   nextPosts() {
    this.postPaginationService.loadNextPage();
   }
   prevPosts() {
    this.postPaginationService.loadPrevPage();
   }
}
