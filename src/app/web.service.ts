import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';


@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:63145/api';

    private messageStore = []; 

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable(); 

    constructor(private http: Http) {
        this.getMessages(name);
    }
    getMessages(user) {
            user = (user) ? '/' + user: '';
            this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
                this.messageStore = response.json();
                this.messageSubject.next(this.messageStore);
            }, error => {  
            console.error("Isijunk backenda");
            });
    }   
               
    async postMessage(message) {
        try { 
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
            
        } catch (error) {
            console.error("Unabble to post Messages");
        } 
       
    }
}