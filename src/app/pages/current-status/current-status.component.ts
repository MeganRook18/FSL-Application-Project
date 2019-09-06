import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import _ from "lodash";

import { DatastoreService } from "src/app/services/datastore.service";
import { policiesI } from "../../app.models";
import {fadeIn} from "../../animations";

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
    private _api: DatastoreService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // TODO - method slow, as pulling in all policies rather than policies related to userId

    this._subscription = this._api
      .getPolicies()
      .subscribe((policies: policiesI[]) => {
        this.policies = _.filter(policies, {
          userId: parseInt(this._activatedRoute.snapshot.paramMap.get("userId"))
        });
      });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
