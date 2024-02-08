import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  greet(name: string): string {
    return `Hello, ${name}`;
  }
}
