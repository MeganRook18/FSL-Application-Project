import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { map } from "rxjs/operators";

import {authI} from "../app.models";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
    private SERVER_URL = "http://localhost:8080/api/";
    private currentUserSubject: BehaviorSubject<authI>;
    public currentUser: Observable<authI>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<authI>(JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): authI {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        console.log("login", username);
        return this.http.post<any>(this.SERVER_URL + "auth/authenticate", { username, password })
            .pipe(map(user => {
                console.log(user);
                console.log(user.token);
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);
    }
}
