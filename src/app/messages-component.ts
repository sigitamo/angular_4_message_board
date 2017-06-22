import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component ({
    selector: 'messages',
    template: 
    `
    <div *ngFor="let message of messages">
    {{ message.text }}
    by: {{ message.owner}}
    </div>
    ` 
})

 export class MessagesComponent {
    messages = [];
    
    constructor(private webService: WebService) {}

    async ngOnInit() {
        var response = await this.webService.getMessages();
        this.messages =  response.json();
    }
   
}