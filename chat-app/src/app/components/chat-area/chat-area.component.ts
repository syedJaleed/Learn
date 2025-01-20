import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-area',
  standalone: true,
  imports: [],
  templateUrl: './chat-area.component.html',
  styleUrl: './chat-area.component.scss'
})
export class ChatAreaComponent {

  messages: {text: string, sender: 'user' | 'bot'}[] = [];
  newMessage: string = "";

  sendMessage(){
    if(this.newMessage.trim()){
      this.messages.push({text: this.newMessage, sender:'user'})

      setTimeout(() => {
        this.messages.push({text: "this is a bot response", sender: "bot"});
      }, 1000);
    }
  }

}
