import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesComponent } from './messages-component';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';

var routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessagesComponent
}
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebService ]
})
export class AppModule { }
