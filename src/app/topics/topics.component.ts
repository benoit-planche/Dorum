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

  constructor(private topicsService: TopicsService) {}

  ngOnInit() {
    this.topicsService.getTopics().then((topics) => {
      this.topics = topics;
    });
    this.updatePaginatedTopics();
  }

  updatePaginatedTopics() {
    this.paginatedTopics = this.topics.slice(this.topicsService.pageIndex * this.topicsService.pageSize, (this.topicsService.pageIndex + 1) * this.topicsService.pageSize);
  }

  onPageChange(event: any) {
    this.topicsService.pageIndex = event.pageIndex;
    this.topicsService.pageSize = event.pageSize;
    this.updatePaginatedTopics();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  getSizePage() {
    return this.topicsService.pageSize;
  }
}
