import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component ({
    selector: 'messages',
    template: 
    `
    <div *ngFor="let message of webService.messages">
    {{ message.text }}
    by: {{ message.owner}}
    </div>
    ` 
})

 export class MessagesComponent {
       constructor(private webService: WebService) {}
}