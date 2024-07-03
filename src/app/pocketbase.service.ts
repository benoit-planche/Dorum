// src/app/services/pocketbase.service.ts
import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class PocketBaseService {
  pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('http://127.0.0.1:8090');
  }

  // Post methods
  async getPostsByTopicId(topicId: string) {
    return await this.pb.collection('posts').getFullList({
      filter: `topicId="${topicId}"`
    });
  }

  async getPostById(postId: string) {
    return await this.pb.collection('posts').getOne(postId);
  }

  async createPost(post: any) {
    return await this.pb.collection('posts').create(post);
  }
}
