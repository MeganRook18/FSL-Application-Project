import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

import { authI } from "../app.models";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // TODO: connect to database instead of hard code
    const users: authI[] = [
      {
        userId: 1,
        username: "admin",
        password: "admin",
        email: "admin@admin.com"
      },
      {
        userId: 2,
        username: "guest",
        password: "guest",
        email: "guest@guest.com"
      }
    ];

    const authHeader = request.headers.get("Authorization");
    const isLoggedIn =
      authHeader && authHeader.startsWith("Bearer fake-jwt-token");

    // wrap in delayed observable to simulate server api call
    return (
      of(null)
        .pipe(
          mergeMap(() => {
            console.log("FBE");
            // authenticate - public
            if (request.url.endsWith("auth/authenticate") && request.method === "POST") {
              const user = users.find(
                x =>
                  x.username === request.body.username &&
                  x.password === request.body.password
              );
              if (!user) {
                return error("Username or password is incorrect");
              }
              return ok({
                userId: user.userId,
                username: user.username,
                email: user.email,
                token: `fake-jwt-token`
              });
            }
            if (request.url.endsWith("auth") && request.method === "POST") {
               const  user = users.find(
                x =>
                  x.username === request.body.username &&
                  x.password === request.body.password
              );
               if (user) {
                return error("User already exist");
              }
               return ok({
                 userId: user.userId,
                 username: user.username,
                 email: user.email,
                 token: `fake-jwt-token`,
              });
            }
            // pass through any requests not handled above
            return next.handle(request);
          })
        )
        // call materialize and dematerialize to ensure delay even if an error
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())
    );

    // private helper functions

    function ok(body) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorised() {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function error(message) {
      return throwError({ status: 400, error: { message } });
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
