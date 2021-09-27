import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth/auth.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthChildComponent } from './auth-child/auth-child.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AuthComponent,
    CreatePostComponent,
    EditPostComponent,
    AuthChildComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
