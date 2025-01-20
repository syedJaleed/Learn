import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatapp';
  sentMessages: { content: string; timestamp: Date }[] = [];
  receivedMessages: { content: string; timestamp: Date }[] = [
    { content: 'Hello! How are you?', timestamp: new Date() },
    { content: 'Are you there?', timestamp: new Date(new Date().getTime() - 60000) },
  ];

  newMessage: string = '';

  get allMessages() {
    return [...this.sentMessages.map(msg => ({ ...msg, type: 'sent' })), 
            ...this.receivedMessages.map(msg => ({ ...msg, type: 'received' }))]
            .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.sentMessages.push({ content: this.newMessage.trim(), timestamp: new Date() });
      this.newMessage = '';
    }
  }
}
