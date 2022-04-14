import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './models/role';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    // get isAdmin() {
    //     return this.currentUser && this.currentUser.role === Role.Admin;
    // }
    get isLoggedin(){
      return this.currentUser;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}