import { Component, OnInit } from '@angular/core';

import { PostsService } from '../shared/posts.service';
import { SinglePostComponent } from './single-post/single-post.component';
import { query } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {
  post$;
  private postLimit = 5;
  constructor(private posts:  PostsService) { }

  ngOnInit() {
    this.post$ = this.posts.getPosts({
      query: {
        limitToFirst: this.postLimit
      }
    }).publishReplay().refCount(); // to avoid multiple subscribe network call
  }

  nextPosts() {
    this.post$ = this.post$.switchMap(
      posts => {
        const startAt = posts[posts.length - 1].$key;
        return this.posts.loadNextPage(startAt, this.postLimit);
      }
    );
  }
  prevPosts() {
    this.post$ = this.post$.switchMap(
      posts => {
        const startAt = posts[0].$key;
        return this.posts.loadPrevPage(startAt, this.postLimit);
      }
    );
  }
}
