import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventEmitterService } from '../../../services/event-emitter/event-emitter.service';

import { IPost, PostService } from '../../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];

  createdPost: Subscription;
  editedPost: Subscription;

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
    this.editedPost = this.eventEmitterService.editedPost$.subscribe(
      ($event) => {
        this.editPostHandler($event);
      }
    );
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  createPostHandler(post: IPost): void {
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

  editPostHandler(post: IPost): void {
    this.postService
      .editPost(post)
      .subscribe(() => this.router.navigate(['/']));
  }
}
