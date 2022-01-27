import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/users';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register-module',
  templateUrl: './register-module.component.html',
  styleUrls: ['./register-module.component.css']
})
export class RegisterModuleComponent implements OnInit {

  constructor(private logService: LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  user:Users = new Users()
  reEnteredPassword = ""
  warningMessage=""
  isSuccess=false
  checkEverything(){
    this.isSuccess=false
    this.warningMessage=""
    console.log("here")
    if(this.reEnteredPassword!=this.user.password){
      this.warningMessage = "Re-entered password didn't match"
    }
    else if(this.user.name=="" || this.user.emailId=="" || this.user.password==""){
      this.warningMessage = "Something went wrong"

    }
    else this.registerUser()

  }
  registerUser(){
    console.log(JSON.stringify(this.user))
    if(this.logService.loginCheck(this.user)>=0){
      this.warningMessage = "This Email ID is already registered."
    }
    else{
      this.logService.registerNewUser(this.user)
      this.isSuccess=true
    }
  }

}
