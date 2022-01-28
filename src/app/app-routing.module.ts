import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistCornerComponent } from './components/artist-corner/artist-corner.component';
import { HomeComponent } from './components/home/home.component';
import { LoginModuleComponent } from './components/login-module/login-module.component';
import { RegisterModuleComponent } from './components/register-module/register-module.component';
import { UserComponent } from './components/user/user.component';
import { AuthService } from './service/auth.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthService]},
  { path: 'login', component: LoginModuleComponent},
  { path: 'register', component: RegisterModuleComponent},
  { path: '', component: LoginModuleComponent},
  { path: 'user', component: UserComponent, canActivate:[AuthService]},
  { path: 'artists', component: ArtistCornerComponent, canActivate:[AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
