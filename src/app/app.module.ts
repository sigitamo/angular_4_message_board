import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesComponent } from './messages-component';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, MessagesComponent, NewMessageComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebService ]
})
export class AppModule { }
