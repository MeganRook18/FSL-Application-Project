import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, forkJoin } from "rxjs";
import { authI, policiesI, policiesDetailsI } from "../app.models";

@Injectable({
  providedIn: "root"
})
export class DatastoreService {
  private SERVER_URL = "http://localhost:8080/api/";

  constructor(private router: Router, private http: HttpClient) {}

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  public getUser(): Observable<authI[]> {
    return this.http.get<authI[]>(this.SERVER_URL + "auth");
  }

  public getPolicies(): Observable<policiesI[]> {
    return this.http.get<policiesI[]>(this.SERVER_URL + "policies");
  }

  public getPoliciesDetails(): Observable<policiesDetailsI[]> {
    return this.http.get<policiesDetailsI[]>(
      this.SERVER_URL + "policiesDetails"
    );
  }

  public createUser(user) {
    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post(this.SERVER_URL + "auth", user, options);
  }

  // Only for Demo purposes
  public apiData(): Observable<any[]> {
    const response1 = this.getUser();
    const response2 = this.getPolicies();
    const response3 = this.getPoliciesDetails();
    return forkJoin([response1, response2, response3]);
  }
}
