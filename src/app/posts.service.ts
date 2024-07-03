import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts = [
    { id: 1, topicId: 1, title: 'Post 1', content: 'Content 1 sergqg uqhgiqg ezuykfgbikqzgdbfvkujh; bq<kujhghbdfukyj chgbujqyhwgbdf j,<gbwh,fv bKUYJQHZGEVFJHGVQ<JH,SGNDFGV CKUJH<FGVZFJe,h', author: 'user1' },
    { id: 2, topicId: 1, title: 'Post 2', content: 'Content 2', author: 'user2' },
    { id: 3, topicId: 1, title: 'Post 3', content: 'Content 3', author: 'user3' },
    { id: 4, topicId: 2, title: 'Post 4', content: 'Content 4', author: 'user4' },
    { id: 5, topicId: 6, title: 'Post 5', content: 'Content 5', author: 'user5' },
    { id: 6, topicId: 2, title: 'Post 6', content: 'Content 6', author: 'user6' },
    { id: 7, topicId: 3, title: 'Post 7', content: 'Content 7', author: 'user7' },
    { id: 8, topicId: 3, title: 'Post 8', content: 'Content 8', author: 'user8' },
    { id: 9, topicId: 6, title: 'Post 9', content: 'Content 9', author: 'user9' },
    { id: 10, topicId: 4, title: 'Post 10', content: 'Content 10', author: 'user10' },
    { id: 11, topicId: 4, title: 'Post 11', content: 'Content 11', author: 'user11' },
    { id: 12, topicId: 4, title: 'Post 12', content: 'Content 12', author: 'user12' },
    { id: 13, topicId: 5, title: 'Post 13', content: 'Content 13', author: 'user13' },
    { id: 14, topicId: 5, title: 'Post 14', content: 'Content 14', author: 'user14' },
    { id: 15, topicId: 6, title: 'Post 15', content: 'Content 15', author: 'user15' },
    { id: 16, topicId: 6, title: 'Post 16', content: 'Content 16', author: 'user16' },
    { id: 17, topicId: 6, title: 'Post 17', content: 'Content 17', author: 'user17' },
    { id: 18, topicId: 6, title: 'Post 18', content: 'Content 18', author: 'user18' },
    { id: 19, topicId: 7, title: 'Post 19', content: 'Content 19', author: 'user19' },
    { id: 20, topicId: 7, title: 'Post 20', content: 'Content 20', author: 'user20' },
    { id: 21, topicId: 7, title: 'Post 21', content: 'Content 21', author: 'user21' },
    { id: 22, topicId: 8, title: 'Post 22', content: 'Content 22', author: 'user22' },
    { id: 23, topicId: 8, title: 'Post 23', content: 'Content 23', author: 'user23' },
    { id: 24, topicId: 8, title: 'Post 24', content: 'Content 24', author: 'user24' },
    { id: 25, topicId: 6, title: 'Post 25', content: 'Content 25', author: 'user25' },
  ];
  pageSize = 5;
  pageIndex = 0;

  getPostsByTopicId(topicId: number) {
    return this.posts.filter(post => post.topicId === topicId);
  }

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }

  createPost(post: any) {
    post.id = this.posts.length + 1;
    this.posts.push(post);
    console.log(this.posts);
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
