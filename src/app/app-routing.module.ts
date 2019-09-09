import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { CurrentStatusComponent } from "./pages/current-status/current-status.component";
import { NestedDataComponent } from "./pages/nested-data/nested-data.component";
import { PreAuthenticationComponent } from "./_layout/pre-autehtication/pre-authentication.component";
import { AppLayoutComponent } from "./_layout/app-layout/app-layout.component";
import {AuthGuard} from "./guard/auth-guard.service";
import {CxResolver} from "./services/cx.resolver";

const routes: Routes = [
  {
    path: "",
    component: PreAuthenticationComponent,
    children: [
      { path: "login", component: LogInComponent },
      { path: "sign-in", component: SignInComponent },
    ]
  },
  { path: "",
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "current-status",
        component: CurrentStatusComponent,
        resolve: {data: CxResolver}
      },
      {
        path: "nested-data",
        component: NestedDataComponent,
        resolve: {data: CxResolver},
      },
    ],
  },
  // otherwise redirect to home
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CxResolver]
})
export class AppRoutingModule { }
