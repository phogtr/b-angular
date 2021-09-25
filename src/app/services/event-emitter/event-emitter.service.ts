import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPost } from '../post/post.service';

@Injectable({
  providedIn: 'root',
})
export class EventEmitterService {
  createdPost$ = new Subject<IPost>();

  constructor() {}
}
