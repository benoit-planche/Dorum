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

  getTopics() {
    return this.topics.getFullList();
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
