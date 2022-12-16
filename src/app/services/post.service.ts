import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAllPost(): IPost[] {
    let posts = [
      new Post(1, 'Lorem ipsum 1', 'Ini postingan ke 1 dari JC', true),
      new Post(2, 'Lorem ipsum 2', 'Ini postingan ke 2 dari JC', true),
      new Post(3, 'Lorem ipsum 3', 'Ini postingan ke 3 dari JC', true),
      new Post(4, 'Lorem ipsum 4', 'Ini postingan ke 4 dari JC', true),
    ]

    return posts;
  }
}
