import { SinglePostComponent } from './single-post/single-post.component';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PostsService} from '../shared/posts.service';
@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit, AfterContentInit {
  post$;
  constructor(private posts:  PostsService) { }

  ngOnInit() {
    this.post$ = this.posts.getPosts();
  }
  ngAfterContentInit() {

  }
}
