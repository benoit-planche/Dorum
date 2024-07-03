import { Injectable } from '@angular/core';
import { PocketBaseService } from './pocketbase.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  pageSize = 5;
  pageIndex = 0;

  constructor( private pocketBaseService: PocketBaseService) {}

  private posts = this.pocketBaseService.pb.collection('posts');

  getPostsByTopicId(topicId: string) {
    return this.posts.getFullList({
      filters: `topicId: "${topicId}"`
    });
  }

  getPostById(id: string) {
    return this.posts.getOne(id);
  }

  createPost(post: any) {
    return this.posts.create(post);
  }

  updatePost(id: string, updatedPost: any) {
    this.posts.update(id, updatedPost);
  }

  deletePost(id: string) {
    this.posts.delete(id);
  }
}
