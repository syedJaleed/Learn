import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePostRequest, Post, PostResponse } from '../models/posts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Posts {

   private API_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_URL}/posts`);
  }

  createPost(payload: CreatePostRequest): Observable<PostResponse> {
    return this.http.post<PostResponse>(`${this.API_URL}/posts`, payload)
  }

}
