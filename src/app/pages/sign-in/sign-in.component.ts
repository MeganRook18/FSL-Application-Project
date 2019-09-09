import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ErrorType} from "../../shared/types";
import {authI} from "../../app.models";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {
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

  constructor() {}

  public signUp() {

    this.errors = [];

    if (!this.signUpForm.valid) {
      this.errors.push(ErrorType.Validation);
      return;
    }
    this.loading = true;

  }

  public hasError(controlName: string, errorName: string) {
    return this.signUpForm.controls[controlName].hasError(errorName);
  }

  public onStrengthChanged(strength: number) {
    this.passwordStrength = strength;
  }

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
