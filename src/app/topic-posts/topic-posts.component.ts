import { AuthService } from './../auth.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  userEmail = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private topicsService: TopicsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.topicId = params['id'];
      this.topic = await this.topicsService.getTopicById(this.topicId);
      await this.fetchTotalPostsCount();
      await this.fetchPosts();
      this.userEmail = await this.getNameUserById(this.topic.author);
    });
  }

  onPageChange(event: any) {
    this.postsService.pageIndex = event.pageIndex;
    this.postsService.pageSize = event.pageSize;
    this.fetchPosts();
  }

  async fetchPosts() {
    await this.postsService
      .getPostsByTopicId(this.topicId)
      .then(async (posts) => {
        for (const post of posts) {
          post.authorEmail = await this.getNameUserById(post.author);
        }
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

  getCurrentUserId() {
    let userid = '';
    const user = this.authService.getCurrentUser();
    if (user) {
      userid = user['id'];
    }
    return userid;
  }

  getCurrentEmail() {
    let email = '';
    const user = this.authService.getCurrentUser();
    if (user) {
      email = user['email'];
    }
    return email;
  }

  getSizePage() {
    return this.postsService.pageSize;
  }

  deleteTopic() {
    this.topicsService.deleteTopic(this.topicId);
    this.router.navigate(['/topics']);
  }

  async getNameUserById(authorId: string) {
    if (!authorId) {
      return '';
    }
    const email = await this.postsService.getNameUserById(authorId);
    return email;
  }
}
