import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostsComponent, PostItemComponent, PostDetailComponent],
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule],
  exports: [PostsComponent],
})
export class PostsModule {}
