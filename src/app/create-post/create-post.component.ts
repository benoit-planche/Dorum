import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {
  post = {
    id: 0,
    topicId: 0,
    title: '',
    content: '',
    author: '', // Add author field
  };

  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.post.topicId = +params['topicId'];
    });
    this.post.author = this.authService.getCurrentUser(); // Set current user as author
  }

  createPost() {
    console.log(this.post);
    this.postsService.createPost(this.post);
    this.router.navigate(['/topics', this.post.topicId]);
  }
}
