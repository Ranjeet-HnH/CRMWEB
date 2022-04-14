import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { APIResponse, AuthenticationRequest, User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
       var data= JSON.parse(localStorage.getItem("currentUser") as string) ;
        this.currentUserSubject = new BehaviorSubject<User>(data);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    login(logindetails:AuthenticationRequest) {
      debugger
        return this.http.post<User>(`${environment.apiUrl}/Auth/login`, logindetails)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.Token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
       // this.currentUserSubject.next(null);
    }
}
