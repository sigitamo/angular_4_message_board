import { Component, Output, EventEmitter } from '@angular/core';
import { WebService } from './web.service';

@Component ({
    selector: 'new-message',
    template: 
    `
    <div class="form-group">
        <label for="owner">Owner:</label>
        <input [(ngModel)]="message.owner" type="text" class="form-control" id="owner">
    </div>
    <div class="form-group">
        <label for="text">text:</label>
        <input type="text" [(ngModel)]="message.text" class="form-control" id="text">
         <button (click) = "post()" class="btn btn-primary" type="button">POST</button>
    </div>
    ` 
})

 export class NewMessageComponent {

    @Output() onPosted = new EventEmitter();  
    constructor(private webService: WebService) {}
        
    message = {
        owner: "",
        text: ""
    }
    post() {
        this.webService.postMessage(this.message);
        this.onPosted.emit(this.message);
    }

}