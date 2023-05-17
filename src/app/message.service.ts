import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  getMessages(): Observable<string[]> {
    const messages = of(this.messages);
    return messages;
  }

  constructor() {}
  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages.length = 0;
  }
}
