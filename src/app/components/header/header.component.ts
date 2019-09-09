import { Component } from "@angular/core";

import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.serivce";
import {authI} from "../../app.models";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  public currentUser: authI;
  public routeLinks: Array<any>;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
    this.routeLinks = [
      { label: "Current Status", link: "/current-status" },
      { label: "Nested Data", link: "/nested-data" },
    ];
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }
  public logout() {
        this.authenticationService.logout();
        this.router.navigate(["/login"]);
    }

}
