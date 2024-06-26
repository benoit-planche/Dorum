import { Component, NgModule, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { ListElementComponent } from '../list-element/list-element.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-topics',
  imports: [ListElementComponent, FormsModule],
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent {

  topics: any[] = [
    {
      id: 1,
      title: 'First topic',
      description: 'This is the first topic'
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
    }
  ];
  pageSize = 5;
  pageIndex = 0;

  constructor(private topicsService: TopicsService) {}

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
  }
}
