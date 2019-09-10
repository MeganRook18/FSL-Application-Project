import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router } from "@angular/router";
import {Observable, of} from "rxjs";

import { authI, policiesI, policiesDetailsI } from "../app.models";
import { config } from "../../config";


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class DatastoreService {
  constructor(
      private router: Router,
      private http: HttpClient,
  ) {}

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  public getUser(): Observable<authI[]> {
    return this.http.get<authI[]>(config.apiUrl + "auth");
  }

  public getPolicies(): Observable<policiesI[]> {
    return this.http.get<policiesI[]>(config.apiUrl + "policies");
  }

  public getPoliciesDetails(): Observable<policiesDetailsI[]> {
    return this.http.get<policiesDetailsI[]>(config.apiUrl + "policiesDetails");
  }

  public createUser(user: authI): Observable<authI> {
    return this.http.post<authI>(config.apiUrl + "auth", user, httpOptions);
  }
}
