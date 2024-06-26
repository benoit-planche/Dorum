import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts = [
    { id: 1, topicId: 1, title: 'Post 1', content: 'Content 1', owner: 'user1' },
    { id: 2, topicId: 1, title: 'Post 2', content: 'Content 2', owner: 'user2' },
  ];

  getPostsByTopicId(topicId: number) {
    return this.posts.filter(post => post.topicId === topicId);
  }

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }

  createPost(post: any) {
    this.posts.push(post);
  }

  updatePost(id: number, updatedPost: any) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex > -1) {
      this.posts[postIndex] = updatedPost;
    }
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
