import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MassCommunicationService } from '../mass-communication.service';
import { HelloService } from '../hello.service';
import { NorwegianHelloService } from '../norwegian.hello.service';

@Component({
  selector: 'mfe1-feature',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: HelloService,
      useValue: NorwegianHelloService
    },
  ],
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {

  greeting = '';

  constructor(private greetingService: MassCommunicationService) {
    this.greeting = greetingService.greetAll(['Alice', 'Bob', 'Charlie']);
  }
}
