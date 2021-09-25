import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPost {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.baseUrl);
  }

  deletePost(post: IPost): Observable<IPost[]> {
    const url = `${this.baseUrl}/${post.id}`;
    return this.http.delete<IPost[]>(url);
  }

  editPost(post: IPost): void {
    const url = `${this.baseUrl}/${post.id}`;
    console.log(url);
    // return this.http.put<IPost[]>(url,);
  }
}
