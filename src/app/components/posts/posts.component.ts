import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventEmitterService } from '../../services/event-emitter/event-emitter.service';

import { IPost, PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];

  createdPost: Subscription;

  constructor(
    private postService: PostService,
    private eventEmitterService: EventEmitterService,
    private router: Router
  ) {
    this.createdPost = this.eventEmitterService.createdPost$.subscribe(
      ($event) => {
        this.createPostHandler($event);
      }
    );
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  createPostHandler(post: IPost) {
    this.postService.createPost(post).subscribe((post) => {
      this.posts.push(post);
      this.router.navigate(['/']);
    });
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
