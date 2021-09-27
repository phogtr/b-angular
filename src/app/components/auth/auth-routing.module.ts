import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthChildComponent } from './auth-child/auth-child.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'auth-child',
            component: AuthChildComponent,
          },
        ],
      },
    ],
  },
  // {
  //   path: 'auth/auth-child',
  //   component: AuthChildComponent,
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'create-post',
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
