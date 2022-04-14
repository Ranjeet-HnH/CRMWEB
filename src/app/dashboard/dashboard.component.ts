import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user';
import { AuthenticationService } from '@app/services/authentication.service';
import { UserService } from '@app/services/user.service';
import { first } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  CurrrencyCalculatorForm: FormGroup;
  loading = false;
  currentUser: User;
  userFromApi: User;

  constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService,
      private formBuilder: FormBuilder
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    // this.CurrrencyCalculatorForm = this.formBuilder.group({
    //   transactiontype:['',{validators :[Validators.required]}],
    //   tradetype: ['', {validators :[Validators.required]}],
    //   buycurrency: ['', {validators :[Validators.required]}],
    //   sellcurrency: ['', {validators :[Validators.required]}],
    // });

     // this.loading = true;

  }


  // convenience getter for easy access to form fields
  //get f() { return this.CurrrencyCalculatorForm.controls; }

  onSubmit(){
    // if (this.CurrrencyCalculatorForm.invalid) {
    //   return;
    // }
  }
}
