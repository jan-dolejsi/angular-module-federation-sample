import { Injectable } from '@angular/core';

export abstract class HelloService {

  constructor() { }

  abstract greet(name: string): string;

  protected capitalize(name: string): string {
    return name.toUpperCase();
  }
}
