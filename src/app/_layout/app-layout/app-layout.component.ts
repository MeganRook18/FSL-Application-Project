import {Component, OnInit} from "@angular/core";
import {first} from "rxjs/operators";
import {authI} from "../../app.models";
import {DatastoreService} from "../../services/datastore.service";

@Component({
  selector: "app-app-layout",
  templateUrl: "./app-layout.component.html",
  styleUrls: ["./app-layout.component.scss"]
})
export class AppLayoutComponent implements OnInit {
  users: authI[] = [];

  constructor(private api: DatastoreService) { }

  ngOnInit() {
    this.api.getUser().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
