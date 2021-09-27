import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EventEmitterService } from '../../../services/event-emitter/event-emitter.service';
import { IPost, PostService } from '../../../services/post/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  previousPost!: IPost;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private eventEmitterService: EventEmitterService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.postService.getSinglePost(params.get('id')!)
        )
      )
      .subscribe((post) => {
        this.previousPost = post;
        this.editPostForm.setValue({
          title: post.title,
          body: post.body,
        });
      });
  }

  editPostForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  onEditPostSubmit() {
    const newPost: IPost = {
      id: this.previousPost.id,
      ...this.editPostForm.value,
    };

    this.eventEmitterService.editedPost$.next(newPost);
  }
}
