import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import _ from "lodash";

import {policiesI} from "../../app.models";
import {fadeIn} from "../../animations";
import {AuthenticationService} from "../../services/authentication.serivce";

@Component({
  selector: "app-current-status",
  templateUrl: "./current-status.component.html",
  styleUrls: ["./current-status.component.scss"],
  animations: [fadeIn]
})
export class CurrentStatusComponent implements OnInit, OnDestroy {
  public policies: policiesI[] = [];
  private _subscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
     this._subscription = this.authenticationService.currentUser.subscribe(user => {
        this.policies = _.filter(this.route.snapshot.data.data, {
          userId: user.userId});
     });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
