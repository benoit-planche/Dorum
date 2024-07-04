import { Injectable } from '@angular/core';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { PocketBaseService } from './pocketbase.service';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  pageIndex = 0;
  pageSize = 5;

  constructor( private pocketBaseService: PocketBaseService) {}

  private topics = this.pocketBaseService.pb.collection('topics')

  async getTopics() {
    const resultList = await this.topics.getList(this.pageIndex + 1, this.pageSize);
    return resultList.items;
  }

  async getTotalTopicsCount() {
    const result = await this.topics.getList(1, 1);
    return result.totalItems;
  }

  getTopicById(id: string) {
    return this.topics.getOne(id);
  }

  async getList(start: number, end: number){
    return await this.topics.getList(start, end);
  }

  createTopic(topic: CreateTopicComponent) {
    const bodyParams = {
      title: topic.title,
      description: topic.description
    };
    return this.topics.create(bodyParams);
  }

  updateTopic(id: string, updatedTopic: any) {
    this.topics.update(id, updatedTopic);
  }

  deleteTopic(id: string) {
    this.topics.delete(id);
  }
}
