import { Component } from '@angular/core';

@Component({
  selector: 'app-create-topic',
  standalone: true,
  imports: [],
  templateUrl: './create-topic.component.html',
  styleUrl: './create-topic.component.scss'
})
export class CreateTopicComponent {
  title = '';
  description = '';

  constructor() {}

  createTopic() {
    console.log('Creating topic with title:', this.title, 'and description:', this.description);
  }


}
