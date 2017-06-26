import { Component } from '@angular/core';
import { NavComponent } from './nav.component';  

@Component({
  selector: 'my-app',
  template: 
  `
  <nav></nav>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent {}
