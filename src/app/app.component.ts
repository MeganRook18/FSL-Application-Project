import { Component, OnInit } from "@angular/core";
import { DatastoreService } from "./services/datastore.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Company X";

  constructor(private api: DatastoreService) {}

  ngOnInit() {
   // this.api.apiData().subscribe(data => console.log("API Data => ", data));
  }
}

/*
* TODO: if a user is created and there is no data, show dialog or something
*       saying 'u have no data yet' etc eg userID 4 +
* */
