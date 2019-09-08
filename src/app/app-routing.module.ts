import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { CurrentStatusComponent } from "./pages/current-status/current-status.component";
import { NestedDataComponent } from "./pages/nested-data/nested-data.component";
import { PreAuthenticationComponent } from "./_layout/pre-autehtication/pre-authentication.component";
import { AppLayoutComponent } from "./_layout/app-layout/app-layout.component";
import {AuthGuard} from "./guard/auth-guard.service";

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
      { path: "", pathMatch: "full", redirectTo: "current-status" },
      { path: "current-status/:userId", component: CurrentStatusComponent },
      { path: "nested-data/:userId", component: NestedDataComponent },
      { path: "**", redirectTo: "current-status" }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
