import {Component, OnInit, ViewChild} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material";
import {animate, state, style, transition, trigger} from "@angular/animations";
import _ from "lodash";

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
  public dataSource = new MatTableDataSource();
  public columnsToDisplay = ["num", "amount", "description"];
  public expandedElement: policiesI | null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.dataSource.data = _.filter(this.route.snapshot.data.data, {
          userId: currentUser.userId});
      this.dataSource.sort = this.sort;
  }
}


