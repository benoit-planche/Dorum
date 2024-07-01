import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../posts.service';
import { TopicsService } from '../topics.service';

@Component({
  standalone: true,
  selector: 'app-topic-posts',
  imports: [RouterLink, CommonModule], 
  templateUrl: './topic-posts.component.html',
  styleUrls: ['./topic-posts.component.scss'],
  providers: [PostsService, TopicsService],
})
export class TopicPostsComponent implements OnInit {
  topicId!: number;
  topic: any;
  posts: any[] = [];

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
  }
}
