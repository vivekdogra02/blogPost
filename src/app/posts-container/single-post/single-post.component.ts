import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../shared/model/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor() { }
  @Input() postList: Post[];
  ngOnInit() {
  }

}
