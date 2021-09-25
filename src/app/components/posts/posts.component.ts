import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost, PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts: Observable<IPost[]> = this.postService.getPosts();

  constructor(private postService: PostService) {}
}
