import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../../../services/post/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
  @Input() post!: IPost;
  @Output() onDeleteHandler: EventEmitter<IPost> = new EventEmitter();

  constructor(private router: Router) {}

  goToEditForm(id: number) {
    this.router.navigate([`/post/edit/${id}`]);
  }

  onClickDelete(post: IPost) {
    this.onDeleteHandler.emit(post);
  }
}
