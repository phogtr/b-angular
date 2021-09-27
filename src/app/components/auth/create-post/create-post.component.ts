import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitterService } from '../../../services/event-emitter/event-emitter.service';
import { IPost } from '../../../services/post/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  constructor(private eventEmitterService: EventEmitterService) {}

  createPostForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  onCreatePostSubmit() {
    const newPost: IPost = {
      id: '' + Math.random(),
      ...this.createPostForm.value,
    };

    this.eventEmitterService.createdPost$.next(newPost);
  }
}
