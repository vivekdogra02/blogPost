import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListFactoryOpts } from 'angularfire2/database/interfaces';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Post } from '../shared/model/post';
import { User } from './model/User';

@Injectable()
export class PostsService {
   constructor(private af: AngularFireDatabase) {

  }

  getPosts(query: FirebaseListFactoryOpts): Observable<Post[]> {
    return this.af.list('/posts', query)
    .map(Post.fromJsonList);
  }

  findPostById(id): Observable<Post> {
    return this.af.object(`/posts/${id}`);
  }
  loadNextPage(startAt: string, limit = 5) {
    return this.getPosts({
      query: {
        orderByKey: true,
        limitToFirst: 5,
        startAt
      }
    });
  }
  loadPrevPage(endAt: string, limit = 5) {
    return this.getPosts({
      query: {
        orderByKey: true,
        limitToLast: 5,
        endAt
      }
    });
  }

  findUserByUsername(username: string): Observable<User> {
     return this.af.list('/users', {
       query: {
         orderByChild: 'username',
         equalTo: username
       }
     }).map(res =>  User.fromArray(res[0]));
  }

  findPostKeysPerUser(userkey: string,
    query: FirebaseListFactoryOpts= {}): Observable<string[]> {
      return  this.af.list(`/postsPerUser/${userkey}`, query)
      .map(postsKeysPerUser => postsKeysPerUser.map(post => post.$key));
  }

  findPostsForPostKeys(postsKeys$:  Observable<string[]>): Observable<Post[]> {
    return postsKeys$
    .map(postKeys => postKeys.map(key => this.findPostById(key)))
    .flatMap(fbObj => Observable.combineLatest(fbObj));
  }
  getPostByUserKey(userkey: string, query: FirebaseListFactoryOpts) {
    const firstPagePostKeys$ = this.findPostKeysPerUser(userkey, query);
    return this.findPostsForPostKeys(firstPagePostKeys$);
  }

}
