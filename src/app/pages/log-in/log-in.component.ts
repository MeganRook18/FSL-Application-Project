import {Component, OnDestroy, OnInit} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import { Subscription } from "rxjs";

import { DatastoreService } from "src/app/services/datastore.service";
import { ErrorType } from "../../shared/types";
import {AuthenticationService} from "../../services/authentication.serivce";


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
  public returnUrl: string;

  private _subscription: Subscription;

  constructor(
      private dataStore: DatastoreService,
      private authenticationService: AuthenticationService,
      private route: ActivatedRoute,
      private router: Router,
  ) {}

  navigateTo(page: string) {
    this.dataStore.navigateTo(page);
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/current-status'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/current-status";
  }

  // easy access to form fields
  get f() { return this.loginForm.controls; }

  public login() {
    this.errors = [];

    if (!this.loginForm.valid) {
      this.errors.push(ErrorType.Validation);
      return;
    }
    this.loading = true;

    this._subscription = this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate([this.returnUrl]);
            },
            error => {
              console.log("error", error);
              this.errors.push(this.errorType.Failed);
              this.loading = false;
            });
  }

    ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}
