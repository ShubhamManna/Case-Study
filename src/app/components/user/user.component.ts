import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser:Users | null
  constructor(private loginService:LoginService) { 
    this.currentUser=loginService.getUserData()
  }
  ngOnInit(): void {
  }
  
  logout(){
    this.loginService.logoutUser()
  }

}
