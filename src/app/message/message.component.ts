import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  messages: string[] = [];

  constructor(private messageservice: MessageService) {}
  ngOnInit(): void {
    this.messageservice
      .getMessages()
      .subscribe((messages) => (this.messages = messages));
  }
  clear() {
    this.messageservice.clear();
  }
}
