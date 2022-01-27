import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistCornerComponent } from './components/artist-corner/artist-corner.component';
import { LoginModuleComponent } from './components/login-module/login-module.component';
import { RegisterModuleComponent } from './components/register-module/register-module.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistCornerComponent,
    LoginModuleComponent,
    RegisterModuleComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
