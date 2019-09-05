import {Component, OnDestroy, OnInit} from "@angular/core";
import { DatastoreService } from "src/app/services/datastore.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {Subscription} from "rxjs";

enum ErrorType {
  Failed = "failed",
  Disabled = "disabled",
  Network = "network",
  Unknown = "unknown",
  Validation = "validation"
}

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"]
})
export class LogInComponent implements OnInit, OnDestroy {
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
   *  3) Display the necessary error messages
   *  4) Style the page
   *  5) Header should`t be visible for this page
   *
   */
  ngOnInit() {}

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
  }

    ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}
