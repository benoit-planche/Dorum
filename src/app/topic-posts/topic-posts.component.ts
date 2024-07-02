import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../posts.service';
import { TopicsService } from '../topics.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  standalone: true,
  selector: 'app-topic-posts',
  imports: [RouterLink, CommonModule, MatPaginator],
  templateUrl: './topic-posts.component.html',
  styleUrls: ['./topic-posts.component.scss'],
  providers: [PostsService, TopicsService],
})
export class TopicPostsComponent implements OnInit {
  topicId!: number;
  topic: any;
  posts: any[] = [];
  paginatedPosts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private topicsService: TopicsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.topicId = +params['id'];
      this.topic = this.topicsService.getTopicById(this.topicId);
      this.posts = this.postsService.getPostsByTopicId(this.topicId);
    });
    this.updatePaginatedPosts();
  }

  updatePaginatedPosts() {
    this.paginatedPosts = this.posts.slice(this.postsService.pageIndex * this.postsService.pageSize, (this.postsService.pageIndex + 1) * this.postsService.pageSize);
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  onPageChange(event: any) {
    this.postsService.pageIndex = event.pageIndex;
    this.postsService.pageSize = event.pageSize;
    this.updatePaginatedPosts();
  }

  getSizePage() {
    return this.postsService.pageSize;
  }
}
