import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CurrentStatusComponent } from './pages/current-status/current-status.component';
import { NestedDataComponent } from './pages/nested-data/nested-data.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'current-status' },
  { path: 'login', component: LogInComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'current-status', component: CurrentStatusComponent },
  { path: 'nested-data', component: NestedDataComponent },
  { path: '**', redirectTo: 'current-status' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
