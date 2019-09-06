import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {MatTableDataSource} from "@angular/material";
import {animate, state, style, transition, trigger} from "@angular/animations";
import { Subscription } from "rxjs";
import _ from "lodash";

import { DatastoreService } from "src/app/services/datastore.service";
import { policiesI } from "../../app.models";
import {fadeIn} from "../../animations";

@Component({
  selector: "app-nested-data",
  templateUrl: "./nested-data.component.html",
  styleUrls: ["./nested-data.component.scss"],
  animations: [
    fadeIn,
    trigger("detailExpand", [
      state("collapsed", style({height: "0px", minHeight: "0"})),
      state("expanded", style({height: "*"})),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class NestedDataComponent implements OnInit {
  public policies: policiesI[] = [];
  public dataSource = new MatTableDataSource();
  public columnsToDisplay = ["num", "amount", "description"];
  public expandedElement: policiesI | null;

  private _subscription: Subscription;

  constructor(
    private _api: DatastoreService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._getTableData();
  }

  private _getTableData() {
    this._subscription = this._api
        .getPolicies()
        .subscribe((policies: policiesI[]) => {
          this.policies = _.filter(policies, {
            userId: parseInt(this._activatedRoute.snapshot.paramMap.get("userId"))
          });
          this.dataSource.data = this.policies;
        });
  }
}


