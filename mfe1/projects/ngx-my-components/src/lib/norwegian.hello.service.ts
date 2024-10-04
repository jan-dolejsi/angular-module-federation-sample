import { Injectable } from '@angular/core';
import { HelloService } from './hello.service';

@Injectable({
  providedIn: 'root'
})
export class NorwegianHelloService extends HelloService {
  constructor() { super() }

  override greet(name: string): string {
    return `Hei ${this.capitalize(name)}`;
  }
}
