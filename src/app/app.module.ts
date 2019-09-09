import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { ApiDataService } from "./api-data.service";
import { AppComponent } from "./app.component";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { CurrentStatusComponent } from "./pages/current-status/current-status.component";
import { NestedDataComponent } from "./pages/nested-data/nested-data.component";
import { HeaderComponent } from "./components/header/header.component";
import {MaterialModule} from "./shared/material.modules";
import { ErrorMessagesComponent } from "./components/error-messages/error-messages.component";
import { PreAuthenticationComponent } from "./_layout/pre-autehtication/pre-authentication.component";
import { AppLayoutComponent } from "./_layout/app-layout/app-layout.component";
import { InnerTableComponent } from "./pages/nested-data/inner-table/inner-table.component";
import {fakeBackendProvider} from "./interceptors/fake-backend";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent,
    CurrentStatusComponent,
    NestedDataComponent,
    HeaderComponent,
    ErrorMessagesComponent,
    PreAuthenticationComponent,
    AppLayoutComponent,
    InnerTableComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        InMemoryWebApiModule.forRoot(ApiDataService),
        MaterialModule,
        MatSortModule,
    ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      // provider used to create fake backend
      fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
