import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SigninComponent} from "./signin/signin.component";
import {AlertsComponent} from "./alerts/alerts.component";
import {ConfigComponent} from "./config/config.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {ProfileComponent} from "./profile/profile.component";
import {NewAlertComponent} from "./new-alert/new-alert.component";

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'alerts/new/:type', component: NewAlertComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
