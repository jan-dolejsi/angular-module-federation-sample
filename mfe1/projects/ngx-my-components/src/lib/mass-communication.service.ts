import { Injectable } from '@angular/core';

import { HelloService } from './hello.service';

@Injectable({
  providedIn: 'root'
})
export class MassCommunicationService {

  constructor(private helloService: HelloService) { }

  greetAll(names: string[]): string {
    return names.map(name => this.helloService.greet(name)).join('. ');
  }
}