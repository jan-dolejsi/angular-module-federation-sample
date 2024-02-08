import { Injectable } from '@angular/core';
import { HelloService } from './hello.service';

@Injectable({
  providedIn: 'root'
})
export class FrenchHelloService extends HelloService {
  constructor() { super() }

  override greet(name: string): string {
    return `Bonjour ${this.capitalize(name)}`;
  }
}
