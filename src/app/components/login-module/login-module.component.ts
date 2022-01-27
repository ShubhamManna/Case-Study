import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Users } from 'src/app/model/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {

  ngOnInit(): void {
  }
  user:Users = new Users()
  currentUser: Users | null = null
  isIncorrectPassword = false
  isUserNotFound = false
  constructor(private logService: LoginService,private router:Router) { }
  login(){
    this.isIncorrectPassword = false
    this.isUserNotFound = false
    var userValid=this.logService.loginCheck(this.user)
    console.log(JSON.stringify(this.user))
    if(userValid==-1){
      console.log("User not found")
      this.isUserNotFound = true
    }
    if(userValid==0){
      console.log("Incorrect Password")
      this.isIncorrectPassword = true
    }
    if(userValid==1){
      console.log("Login success")
      this.currentUser = this.logService.getUserData()
      console.log(JSON.stringify(this.currentUser))
      this.router.navigateByUrl("/home")
    }
  }
}
