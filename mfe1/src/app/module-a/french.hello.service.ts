import { Injectable } from '@angular/core';
import { HelloService } from 'ngx-my-components';

@Injectable({
  providedIn: 'root'
})
export class FrenchHelloService extends HelloService {
  constructor() { super() }

  override greet(name: string): string {
    return `Bonjour ${this.capitalize(name)}`;
  }
}
