import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from '../hello.service';

@Component({
  selector: 'mfe1-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {

  greeting = '';

  constructor(private helloService: HelloService) {
    this.greeting = helloService.greet('World');
  }
}
