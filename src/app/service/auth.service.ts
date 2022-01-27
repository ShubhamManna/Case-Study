import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private loginService:LoginService,private router:Router) { }
  canActivate(): boolean {
    if(this.loginService.getUserData() == null){
      this.router.navigateByUrl("/login")
      return false
    } 
    else return true
  }
}
