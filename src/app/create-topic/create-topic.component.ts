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

  constructor(private TopicsService: TopicsService, private router: Router) {}

  createTopic() {
    this.TopicsService.createTopic(this);
    this.router.navigate(['/topics']);
  }


}
