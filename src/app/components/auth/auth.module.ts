import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthChildComponent } from './auth-child/auth-child.component';

@NgModule({
  declarations: [AuthComponent, CreatePostComponent, AuthChildComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
