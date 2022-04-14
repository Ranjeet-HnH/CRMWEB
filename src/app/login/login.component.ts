import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/services/authentication.service';
import { AuthenticationRequest } from '@app/models/user';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  logindetails = new AuthenticationRequest();
  isOptSent: boolean = false;
  maskemail: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', { validators: [Validators.required], updateOn: 'blur' }],
      password: ['', { validators: [Validators.required] }],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    debugger;
    this.loading = true;
    this.logindetails.UserName = this.loginForm.controls['username'].value;
    this.logindetails.Password = this.loginForm.controls['password'].value;

    this.login();
  }

  login() {
    debugger
    this.authenticationService
      .login(this.logindetails)
      .pipe(first())
      .subscribe(
        (data) => {
          debugger
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.error = error;
          console.log(this.error);
          this.loading = false;
        }
      );
  }
}
