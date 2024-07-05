import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit {
  postId!: string;
  post: any;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((async (params) => {
      this.postId = params['id'];
      this.post = await this.postsService.getPostById(this.postId);
    }));
  }

  goBack() {
    this.router.navigate(['/topics/' + this.post.topicId]);
  }

  getCurrentUserId() {
    let userid = '';
    const  user = this.authService.getCurrentUser();
    if (user) {
      userid = user['id'];
    }
    return userid;
  }

  getCurrentUsername() {
    let username = '';
    const user = this.authService.getCurrentUser();
    if (user) {
      username = user['email'];
    }
    return username;
  }

  async deletePost() {
    await this.postsService.deletePost(this.postId);
    this.router.navigate(['/topics/' + this.post.topicId]);
  }

  editPost() {
    this.router.navigate(['/edit-post/' + this.postId]);
  }
}
