import { Injectable } from '@angular/core';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { PocketBaseService } from './pocketbase.service';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  pageIndex = 0;
  pageSize = 5;

  constructor(private pocketBaseService: PocketBaseService) {}

  private topics = this.pocketBaseService.pb.collection('topics');

  async getTopics(): Promise<any[]> {
    const resultList = await this.topics.getList(
      this.pageIndex + 1,
      this.pageSize
    );
    return resultList.items;
  }

  async getTotalTopicsCount() {
    const result = await this.topics.getList(1, 1);
    return result.totalItems;
  }

  async getTopicById(id: string) {
    return await this.topics.getOne(id);
  }

  async getList(start: number, end: number) {
    return await this.topics.getList(start, end);
  }

  async createTopic(topic: any) {
    return await this.topics.create(topic);
  }

  async updateTopic(id: string, updatedTopic: any) {
    await this.topics.update(id, updatedTopic);
  }

  async deleteTopic(id: string) {
    await this.deleteAllPostsByTopicId(id);
    this.topics.delete(id);
  }

  async getNameUserById(authorId: string) {
    const email = await this.pocketBaseService.getNameUserById(authorId);
    return email;
  }

  async deleteAllPostsByTopicId(topicId: string) {
    const postsInTopic = await this.pocketBaseService.pb
      .collection('posts')
      .getList(0, -1, { filter: `topicId="${topicId}"` });
    postsInTopic.items.forEach((post) => {
      this.pocketBaseService.pb.collection('posts').delete(post.id);
    });
  }
}
