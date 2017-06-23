import { Component } from '@angular/core';

@Component ({
    selector: 'nav',
    template: 
    `<div class="nav-bar">
        
        <button routerLink="/" class=btn-primary>Message BOARD</button>
        <button routerLink="/messages" class=btn-primary>Messages</button>
    </div>
    ` 
})

 export class NavComponent {
       constructor() {}
}