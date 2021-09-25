import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from '../../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
  @Input() post!: IPost;
  @Output() onEditHandler: EventEmitter<IPost> = new EventEmitter();
  @Output() onDeleteHandler: EventEmitter<IPost> = new EventEmitter();

  constructor() {}

  onClickEdit(post: IPost) {
    this.onEditHandler.emit(post);
  }

  onClickDelete(post: IPost) {
    this.onDeleteHandler.emit(post);
  }
}
