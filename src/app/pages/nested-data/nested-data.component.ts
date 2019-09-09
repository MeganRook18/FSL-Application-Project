import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {MatTableDataSource} from "@angular/material";
import {animate, state, style, transition, trigger} from "@angular/animations";
import _ from "lodash";

import { policiesI } from "../../app.models";
import {fadeIn} from "../../animations";
import {AuthenticationService} from "../../services/authentication.serivce";
import {Subscription} from "rxjs";
import {MatSort} from "@angular/material/sort";

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
export class NestedDataComponent implements OnInit, OnDestroy {
  public dataSource = new MatTableDataSource();
  public columnsToDisplay = ["num", "amount", "description"];
  public expandedElement: policiesI | null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private _subscription: Subscription;

  constructor(
      private route: ActivatedRoute,
      private authenticationService: AuthenticationService,
      ) {}

  ngOnInit() {
    this._subscription = this.authenticationService.currentUser.subscribe(user => {
         this.dataSource.data = _.filter(this.route.snapshot.data.data, {
          userId: user.userId});
         this.dataSource.sort = this.sort;
     });
  }

   ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}


