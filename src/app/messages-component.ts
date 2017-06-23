import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component ({
    selector: 'messages',
    template: 
    `
    <div *ngFor="let message of webService.messages">
    <h3 routerLink="/messages" style="cursor: pointer">{{ message.owner}}</h3>
    <p> {{ message.text }} </p>
    </div>
    ` 
})

 export class MessagesComponent {
       constructor(private webService: WebService) {}
}