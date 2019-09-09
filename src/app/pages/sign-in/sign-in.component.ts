import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

import { DatastoreService } from "src/app/services/datastore.service";
import {ErrorType} from "../../shared/types";
import {authI} from "../../app.models";


@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit, OnDestroy  {
  private success: boolean;
  public hidePassword = true;
  public passwordStrength: number;
  public errors: ErrorType[];
  public errorType = ErrorType;
  public loading = false;

  public signUpForm = new FormGroup({
    email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
    ),
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  });

  constructor(private dataStore: DatastoreService) {}

   ngOnInit(): void {
     console.log("ngOnInit");
      this.dataStore.getPolicies().subscribe(a => {
      console.log(a);
    });
   }

  public signUp() {
    console.log("sign up");

    // this.errors = [];
    //
    // if (!this.signUpForm.valid) {
    //   this.errors.push(ErrorType.Validation);
    //   return;
    // }
    // this.loading = true;
    // this.dataStore.createUser(this._formToUserObject()).subscribe((ret) => {
    //   console.log("user created: ", ret);
    // });

  }

  public hasError(controlName: string, errorName: string) {
    return this.signUpForm.controls[controlName].hasError(errorName);
  }

  public onStrengthChanged(strength: number) {
    this.passwordStrength = strength;
  }

  ngOnDestroy(): void {}

  // private _generateUserId() {
  //   console.log("_generateUserId");
  //   let n: number;
  //   return n;
  // }

  private _formToUserObject() {
    const newUser: authI = {
      userId: 3,
      username: this.signUpForm.get("username").value,
      password: this.signUpForm.get("password").value,
      email: this.signUpForm.get("email").value,
    };
    return newUser;
  }


}
