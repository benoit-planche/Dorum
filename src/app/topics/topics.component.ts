import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { ListElementComponent } from '../list-element/list-element.component';
import { TopicsService } from '../topics.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-topics',
  imports: [
    ListElementComponent,
    FormsModule,
    RouterLink,
    MatPaginator,
    CommonModule,
  ],
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
  providers: [TopicsService],
})
export class TopicsComponent implements OnInit{
  topics: any[] = [];
  length = 0;

  constructor(private topicsService: TopicsService) {}

  async ngOnInit() {
    await this.fetchTotalTopicsCount();
    await this.fetchTopics();
  }

  onPageChange(event: any) {
    this.topicsService.pageIndex = event.pageIndex;
    this.topicsService.pageSize = event.pageSize;
    this.fetchTopics();
  }

  async fetchTopics() {
    await this.topicsService.getTopics().then((topics) => {
      this.topics = topics;
    });
  }

  async fetchTotalTopicsCount() {
    await this.topicsService.getTotalTopicsCount().then((count) => {
      this.length = count;
    });
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  getSizePage() {
    return this.topicsService.pageSize;
  }
}
