import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, forkJoin } from "rxjs";

import { authI, policiesI, policiesDetailsI } from "../app.models";
import { config } from "../../config";
import {AuthenticationService} from "./authentication.serivce";

@Injectable({
  providedIn: "root"
})
export class DatastoreService {

  constructor(
      private router: Router,
      private http: HttpClient,
      private authenticationService: AuthenticationService,
  ) {}

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  public getUsers(): Observable<authI[]> {
    return this.http.get<authI[]>(config.apiUrl + "auth");
  }

  public getPolicies(): Observable<policiesI[]> {
    return this.http.get<policiesI[]>(config.apiUrl + "policies");
  }

  public getPoliciesDetails(): Observable<policiesDetailsI[]> {
    return this.http.get<policiesDetailsI[]>(
      config.apiUrl + "policiesDetails"
    );
  }

  public createUser(user) {
    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post(config.apiUrl + "auth", user, options);
  }

  // Only for Demo purposes
  public apiData(): Observable<any[]> {
    const response1 = this.getUsers();
    const response2 = this.getPolicies();
    const response3 = this.getPoliciesDetails();
    return forkJoin([response1, response2, response3]);
  }
}
