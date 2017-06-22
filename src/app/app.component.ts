import { Component } from '@angular/core';
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
        <new-message></new-message>
        <messages></messages>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent  {}
