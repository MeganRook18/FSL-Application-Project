import {Component, OnDestroy, OnInit} from "@angular/core";
import {DatastoreService} from "../../services/datastore.service";

@Component({
  selector: "app-app-layout",
  templateUrl: "./app-layout.component.html",
  styleUrls: ["./app-layout.component.scss"]
})
export class AppLayoutComponent implements OnInit{
  constructor(private api: DatastoreService) { }

  ngOnInit() {}
}
