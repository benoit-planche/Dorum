import { Component, NgModule, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { ListElementComponent } from '../list-element/list-element.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  standalone: true,
  selector: 'app-topics',
  imports: [ListElementComponent, FormsModule, RouterLink, MatPaginator],
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
  providers: [TopicsService]
})
export class TopicsComponent {

  topics: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private topicsService: TopicsService) {}

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
