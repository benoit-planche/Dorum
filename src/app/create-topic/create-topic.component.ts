import { TopicsService } from './../topics.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-topic',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-topic.component.html',
  styleUrl: './create-topic.component.scss'
})
export class CreateTopicComponent {
  title = '';
  description = '';

  constructor(private topicsService: TopicsService, private router: Router) {}

  async createTopic() {
    console.log('Creating topic', this.title, this.description);
    const newtopic = await this.topicsService.createTopic(this);
    if (newtopic) {
      this.router.navigate(['/topics/' + newtopic.id]);
    }
  }

}
