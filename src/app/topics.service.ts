import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  private topics = [
    { id: 1, title: 'Topic 1', owner: 'user1' },
    { id: 2, title: 'Topic 2', owner: 'user2' },
  ];

  getTopics() {
    return this.topics;
  }

  getTopicById(id: number) {
    return this.topics.find(topic => topic.id === id);
  }

  createTopic(topic: any) {
    this.topics.push(topic);
  }

  updateTopic(id: number, updatedTopic: any) {
    const topicIndex = this.topics.findIndex(topic => topic.id === id);
    if (topicIndex > -1) {
      this.topics[topicIndex] = updatedTopic;
    }
  }

  deleteTopic(id: number) {
    this.topics = this.topics.filter(topic => topic.id !== id);
  }
}
