import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthModel } from 'pocketbase';
import { CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {
  post = {
    id: '',
    topicId: '',
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
      this.post.topicId = params['topicId'];
    });
    const user = this.authService.getCurrentUser();
    if (user) {
      this.post.author = user['id'];
    }
  }

  createPost() {
    console.log(this.post);
    this.postsService.createPost(this.post).then(() => {
      this.router.navigate(['/topics', this.post.topicId]);
    });
  }
}
