import { TopicsService } from './../topics.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-topic',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-topic.component.html',
  styleUrl: './create-topic.component.scss'
})
export class CreateTopicComponent implements OnInit{
  topic = {
    title: '',
    description: '',
    author: '',
  }
  constructor(
    private topicsService: TopicsService,
    private router: Router,
    private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.topic.author = user['id'];
    }
  }

  async createTopic() {
    await this.topicsService.createTopic(this.topic).then(() => {
      this.router.navigate(['/topics']);
    });
  }

}
