// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { BehaviorSubject } from "rxjs";
// import { Router } from "@angular/router";
// import { AuthenticationRequest} from "@app/models/user";

// @Injectable({

//     providedIn:"root"
// })
// export class LoginValidateService{

//     private loggedIn = new BehaviorSubject<boolean>(false); // {1}

//   get isLoggedIn() {
//     return this.loggedIn.asObservable(); // {2}
//   }

//   constructor(
//     private router: Router
//   ) {}

//   login(user: AuthenticationRequest){
//     if (user.UserName !== '' && user.Password !== '' ) { // {3}
//       this.loggedIn.next(true);
//       this.router.navigate(['/']);
//     }
//   }

//   logout() {                            // {4}
//     this.loggedIn.next(false);
//     this.router.navigate(['/login']);
//   }
// }
