import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Post } from '../shared/model/post';

@Injectable()
export class PostsService {
   constructor(private af: AngularFireDatabase) {

  }

  getPosts(): Observable<Post[]> {
    return this.af.list('/posts', {
      query: {
        orderByKey: true,
        limitToFirst: 10
      }
    }).map(Post.fromJsonList);
  }
}
