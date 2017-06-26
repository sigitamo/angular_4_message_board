import { Component } from '@angular/core';

@Component ({
    selector: 'nav',
    template: `
     <div class="nav-bar" style="background-color: blue">
        <button routerLink="/" class=btn-primary>Message BOARD</button>
        <button routerLink="/messages" class=btn-primary>Messages</button>
    </div>
    ` 
})

 export class NavComponent {
       constructor() {}
}