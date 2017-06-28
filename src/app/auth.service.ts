import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    
    BASE_URL = 'http://localhost:63145/auth';
    
    constructor(private http: Http) {}

   register(user) {
    delete user.confirmPassword; 
    this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
        localStorage.setItem('token', res.json().token)
        localStorage.setItem('name ', res.json().firstName)
    });
   } 
} 

    