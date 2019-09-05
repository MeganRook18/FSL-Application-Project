import { Component, OnInit } from "@angular/core";
import { DatastoreService } from "src/app/services/datastore.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"]
})
export class LogInComponent implements OnInit {
  public loginForm = new FormGroup({});

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

  public login(){}

}
