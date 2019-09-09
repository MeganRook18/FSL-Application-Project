import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

import {ErrorType} from "../../shared/types";
import {authI} from "../../app.models";
import {DatastoreService} from "../../services/datastore.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit, OnDestroy {
  public hidePassword = true;
  public passwordStrength: number;
  public errors: ErrorType[];
  public errorType = ErrorType;
  public path = "sign-up";
  public loading = false;

  public signUpForm = new FormGroup({
    email: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])
    ),
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  private _subscription: Subscription;
  private _allUsers: authI[];

  constructor(private dataStore: DatastoreService) {}

  private static _passwordMatchValidator(signUpForm: FormGroup) {
    const password = signUpForm.controls.password.value;
    const confirmPassword = signUpForm.controls.confirmPassword.value;
    console.log(password === confirmPassword);
    return password === confirmPassword;
  }

  ngOnInit(): void {
    this._subscription = this.dataStore.getUser().subscribe((users: authI[]) => {
      this._allUsers = users;
    });
  }

  public signUp() {
    this.errors = [];

    if (!this.signUpForm.valid) {
      this.errors.push(this.errorType.Validation);
      return;
    }

    if (SignInComponent._passwordMatchValidator(this.signUpForm) === false) {
      this.errors.push(this.errorType.Failed);
      return;
    } else {
      this.loading = true;
      // handle post here
      this.dataStore.createUser(this._formToUserObject()).subscribe(data => {
        console.log(data);
        this.loading = false;
      });
    }
  }

  public hasError(controlName: string, errorName: string) {
    return this.signUpForm.controls[controlName].hasError(errorName);
  }

  public onStrengthChanged(strength: number) {
    this.passwordStrength = strength;
  }

  private _generateUserId() {
    const l = this._allUsers.length;
    return this._allUsers[l - 1].userId + 1;
  }

  private _formToUserObject() {
    const newUser: authI = {
      userId: this._generateUserId(),
      username: this.signUpForm.get("username").value,
      password: this.signUpForm.get("password").value,
      email: this.signUpForm.get("email").value
    };
    return newUser;
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
