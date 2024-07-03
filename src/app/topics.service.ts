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

  createTopic(topic: any) {
    return this.topics.create(topic);
  }

  updateTopic(id: string, updatedTopic: any) {
    this.topics.update(id, updatedTopic);
  }

  deleteTopic(id: string) {
    this.topics.delete(id);
  }
}
