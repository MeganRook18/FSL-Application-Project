import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { DatastoreService } from "src/app/services/datastore.service";
import { ErrorType } from "../../shared/types";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"]
})
export class LogInComponent implements OnDestroy {
  public loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  public hidePassword = true;
  public errorType = ErrorType;
  public errors: ErrorType[] = [];
  public loading = false;
  private _subscription: Subscription;
  constructor(private dataStore: DatastoreService) {}

  /* Page Tasks:
   *
   *  1) Take and validate the user input fields
   *  2) Connect with API
   *
   */
  navigateTo(page: string) {
    this.dataStore.navigateTo(page);
  }

  public login() {
    this.errors = [];

    if (!this.loginForm.valid) {
      this.errors.push(ErrorType.Validation);
      return;
    }
    this.loading = true;
    // subscription
    this._subscription = this.dataStore.getUser().subscribe(
        user => {
          console.log(user);
        });
  }

    ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}
