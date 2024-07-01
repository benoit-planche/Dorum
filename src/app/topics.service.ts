import { Injectable } from '@angular/core';
import { CreateTopicComponent } from './create-topic/create-topic.component';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  private topics = [
    {
      id: 1,
      title: 'First topic',
      description: 'This is the first topic',
      ownerId: 1
    },
    {
      id: 2,
      title: 'Second topic',
      description: 'This is the second topic'
    },
    {
      id: 3,
      title: 'Third topic',
      description: 'This is the third topic'
    },
    {
      id: 4,
      title: 'Fourth topic',
      description: 'This is the fourth topic'
    },
    {
      id: 5,
      title: 'Fifth topic',
      description: 'This is the fifth topic'
    },
    {
      id: 6,
      title: 'Sixth topic',
      description: 'This is the sixth topic'
    },
    {
      id: 7,
      title: 'Seventh topic',
      description: 'This is the seventh topic'
    },
    {
      id: 8,
      title: 'Eighth topic',
      description: 'This is the eighth topic'
    },
    {
      id: 9,
      title: 'Ninth topic',
      description: 'This is the ninth topic'
    },
    {
      id: 10,
      title: 'Tenth topic',
      description: 'This is the tenth topic'
    },
    {
      id: 11,
      title: 'Eleventh topic',
      description: 'This is the eleventh topic'
    },
    {
      id: 12,
      title: 'Twelfth topic',
      description: 'This is the twelfth topic'
    },
    {
      id: 13,
      title: 'Thirteenth topic',
      description: 'This is the thirteenth topic'
    },
    {
      id: 14,
      title: 'Fourteenth topic',
      description: 'This is the fourteenth topic'
    },
    {
      id: 15,
      title: 'Fifteenth topic',
      description: 'This is the fifteenth topic'
    },
    {
      id: 16,
      title: 'Sixteenth topic',
      description: 'This is the sixteenth topic'
    }
  ];
  pageSize = 5;
  pageIndex = 0;

  getTopics() {
    return this.topics;
  }

  getTopicById(id: number) {
    return this.topics.find(topic => topic.id === id);
  }

  createTopic(topic: CreateTopicComponent) {
    const newTopic = {
      id: this.topics.length + 1,
      title: topic.title,
      description: topic.description
    };
    this.topics.push(newTopic);
    console.log(this.topics);
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
