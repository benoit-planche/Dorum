// src/app/services/pocketbase.service.ts
import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class PocketBaseService {
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('http://127.0.0.1:8090');
  }

  // Authentication methods
  async login(email: string, password: string): Promise<any>{
    console.log('login service', email, password);
    return await this.pb.collection('users').authWithPassword(email, password);
  }

  async signup(username: string, email: string, password: string) {
    return await this.pb.collection('users').create({
      username,
      email,
      password,
      passwordConfirm: password
    });
  }

  async logout() {
    this.pb.authStore.clear();
  }

  async getCurrentUser() {
    return this.pb.authStore.model;
  }

  isAuthenticated(): boolean {
    return !!this.pb.authStore.token;
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
