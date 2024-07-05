import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TopicsService } from '../topics.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-topic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-topic.component.html',
  styleUrl: './edit-topic.component.scss'
})
export class EditTopicComponent implements OnInit {
  topic: any;

  constructor(
    private topicsService: TopicsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.topic = await this.topicsService.getTopicById(params['id']);
    });
  }

  editTopic() {
    this.topicsService.updateTopic(this.topic.id, this.topic).then(() => {
      this.router.navigate(['/topics', this.topic.topicId]);
    });
  }

}
