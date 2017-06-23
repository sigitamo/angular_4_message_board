import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages-component';
import { NewMessageComponent } from './new-message.component';

@Component({
  selector: 'my-app',
  template: 
  `
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1 class="text-center">Messag Board</h1> 
        <new-message (onPosted) = "onPosted($event)"></new-message>
        <messages></messages>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent {
  
  @ViewChild(MessagesComponent) messages: MessagesComponent;

  onPosted(message){
    this.messages.messages.push(message);
  }
}
