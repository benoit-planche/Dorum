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
  paginatedTopics: any[] = [];

  constructor(private topicsService: TopicsService) {}

  async ngOnInit() {
    await this.updatePaginatedTopics();
    this.topicsService.getTopics().then((topics) => {
      this.topics = topics;
    });
  }

  async updatePaginatedTopics() {
    const startIndex = this.topicsService.pageIndex * this.topicsService.pageSize;
    const endIndex = startIndex + this.topicsService.pageSize;
    console.log('Start index', startIndex);
    console.log('End index', endIndex);
    await this.topicsService.getList(startIndex, endIndex).then((topics) => {
      this.paginatedTopics = topics.items;
    });
    console.log('Paginated topic', this.paginatedTopics);
  }

  async onPageChange(event: any) {
    this.topicsService.pageIndex = event.pageIndex;
    this.topicsService.pageSize = event.pageSize;
    console.log('Page index', this.topicsService.pageIndex);
    console.log('Page size', this.topicsService.pageSize);
    await this.updatePaginatedTopics();

  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  getSizePage() {
    return this.topicsService.pageSize;
  }
}
