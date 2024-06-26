import { Component } from '@angular/core';
import { TopicsComponent } from '../topics/topics.component';

@Component({
  selector: 'app-list-element',
  standalone: true,
  imports: [],
  templateUrl: './list-element.component.html',
  styleUrl: './list-element.component.scss'
})
export class ListElementComponent {
elements!: any[];

  setElements(elements: any[]) {
    this.elements = elements;
  }
}
