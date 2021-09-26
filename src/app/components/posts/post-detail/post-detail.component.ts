import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IPost, PostService } from '../../../services/post/post.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  singlePost!: Observable<IPost>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.singlePost = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.postService.getSinglePost(params.get('id')!)
      )
    );
  }
}
