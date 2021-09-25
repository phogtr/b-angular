import { Component, OnInit } from '@angular/core';

import { IPost, PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  onDeleteHandler(post: IPost): void {
    this.postService
      .deletePost(post)
      .subscribe(
        () => (this.posts = this.posts.filter((p) => p.id !== post.id))
      );
  }

  onEditHandler(post: IPost): void {
    this.postService.editPost(post);
  }
}
