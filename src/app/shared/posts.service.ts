import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PostsService {
   constructor(private af: AngularFireDatabase) {

  }

  getPosts(): Observable<any> {
    return this.af.list('/posts').map(console.log);
  }
}
