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

  async getPostsByTopicId(topicId: string): Promise<any[]> {
    const resultList = await this.posts.getList(this.pageIndex + 1, this.pageSize, {
      filter: `topicId="${topicId}"`
    });
    return resultList.items;
  }

  async getTotalPostsCount(topicId: string): Promise<number> {
    const result = await this.posts.getList(1, 1, {
      filter: `topicId="${topicId}"`
    });
    return result.totalItems;
  }

  async getPostById(id: string) {
    return await this.posts.getOne(id);
  }

  async getList(start: number, end: number) {
    return await this.posts.getList(start, end);
  }

  async createPost(post: any) {
    return await this.posts.create(post);
  }

  async updatePost(id: string, updatedPost: any) {
    return await this.posts.update(id, updatedPost);
  }

  async deletePost(id: string) {
    return await this.posts.delete(id);
  }
}
