import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component ({
    selector: 'nav',
    template: `
     <div class="nav-bar" style="background-color: blue; padding: 10px;">
        <button routerLink="/" class=btn-primary>Message BOARD</button>
        <button routerLink="/messages" class=btn-primary>Messages</button>
        <span style="flex:1 1 auto"></span>
        <button routerLink="/register" class=btn-primary>Register</button>
        <button *ngIf="auth.isAuthenticated" routerLink="/register" class=btn-primary>Welcome {{auth.name }}</button> 
    </div>
    ` 
})

 export class NavComponent {
       constructor(private auth: AuthService) {}
}