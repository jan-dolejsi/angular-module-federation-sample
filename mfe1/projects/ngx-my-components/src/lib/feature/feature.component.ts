import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MassCommunicationService } from '../mass-communication.service';

@Component({
  selector: 'mfe1-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {

  greeting = '';

  constructor(private greetingService: MassCommunicationService) {
    this.greeting = greetingService.greetAll(['Alice', 'Bob', 'Charlie']);
  }
}
