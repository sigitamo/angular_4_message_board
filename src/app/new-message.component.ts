import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component ({
    selector: 'new-message',
    template: 
    `
    <div class="form-group">
        <label for="owner">Owner:</label>
        <input value = {{owner}} type="text" class="form-control" id="owner">
    </div>
    <div class="form-group">
        <label for="text">text:</label>
        <input type="text" class="form-control" id="text">
         <button (click) = "post()" class="btn btn-primary" type="button">POST</button>
    </div>
    ` 
})

 export class NewMessageComponent {
        
    constructor(private webService: WebService) {}
        
    owner = "test";
    post() {
        console.log(this.owner);
    }

}