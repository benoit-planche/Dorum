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
export class TopicsComponent {
  topics: any[] = [];
  paginatedTopics: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(private topicsService: TopicsService) {}

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
    this.updatePaginatedTopics();
  }

  updatePaginatedTopics() {
    this.paginatedTopics = this.topics.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedTopics();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
