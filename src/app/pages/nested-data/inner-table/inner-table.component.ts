import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import _ from "lodash";

import { policiesDetailsI } from "../../../app.models";
import { DatastoreService } from "../../../services/datastore.service";

@Component({
  selector: "app-inner-table",
  templateUrl: "./inner-table.component.html",
  styleUrls: ["./inner-table.component.scss"]
})
export class InnerTableComponent implements OnInit, OnDestroy {
  @Input() polId: number;
  public details: policiesDetailsI[] = [];

  private _subscription: Subscription;
  constructor(private _api: DatastoreService) {}

  ngOnInit() {
    this._subscription = this._api.getPoliciesDetails().subscribe(details => {
      this.details = _.filter(details, {
        polId: this.polId
      });
    });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
