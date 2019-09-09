import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import _ from "lodash";

import {policiesI} from "../../app.models";
import {fadeIn} from "../../animations";

@Component({
  selector: "app-current-status",
  templateUrl: "./current-status.component.html",
  styleUrls: ["./current-status.component.scss"],
  animations: [fadeIn]
})
export class CurrentStatusComponent implements OnInit {
  public policies: policiesI[] = [];
  public currentUser;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.policies = _.filter(this.route.snapshot.data.data, {
      userId: this.currentUser.userId});
  }
}
