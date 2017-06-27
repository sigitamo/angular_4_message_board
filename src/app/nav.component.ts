import { Component } from '@angular/core';

@Component ({
    selector: 'nav',
    template: `
     <div class="nav-bar" style="background-color: blue; padding: 10px;">
        <button routerLink="/" class=btn-primary>Message BOARD</button>
        <button routerLink="/messages" class=btn-primary>Messages</button>
        <button routerLink="/register" class=btn-primary>Register</button>
    </div>
    ` 
})

 export class NavComponent {
       constructor() {}
}