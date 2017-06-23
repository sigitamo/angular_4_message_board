import { Component } from '@angular/core';
import { MessagesComponent } from './messages-component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'home',
  template: 
  `
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
      
        <new-message></new-message>
        <messages></messages>
      </div>
    </div>
  </div>
  `,
})
export class HomeComponent {}
