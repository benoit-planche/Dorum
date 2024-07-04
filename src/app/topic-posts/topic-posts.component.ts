import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../posts.service';
import { TopicsService } from '../topics.service';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  standalone: true,
  selector: 'app-topic-posts',
  imports: [RouterLink, CommonModule, MatPaginator, TruncatePipe],
  templateUrl: './topic-posts.component.html',
  styleUrls: ['./topic-posts.component.scss'],
  providers: [PostsService, TopicsService],
})
export class TopicPostsComponent implements OnInit {
  topicId!: string;
  topic: any;
  posts: any[] = [];
  length = 0;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private topicsService: TopicsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.topicId = params['id'];
      this.topic = await this.topicsService.getTopicById(this.topicId);
      await this.fetchTotalPostsCount();
      await this.fetchPosts();
    });
  }

  onPageChange(event: any) {
    this.postsService.pageIndex = event.pageIndex;
    this.postsService.pageSize = event.pageSize;
    this.fetchPosts();
  }

  async fetchPosts() {
    await this.postsService.getPostsByTopicId(this.topicId).then((posts) => {
      this.posts = posts;
    });
  }

  async fetchTotalPostsCount() {
    await this.postsService.getTotalPostsCount(this.topicId).then((count) => {
      this.length = count;
    });
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  getSizePage() {
    return this.postsService.pageSize;
  }
}
