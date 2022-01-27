import { Injectable } from '@angular/core';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usersList: Users[] = []
  private currentUser: Users | null = null
  demoUser: Users = { name: "DemoUser", emailId: "demouser@gmail.com", password: "abcd123", userId: 0,likedArtworks:[1,2,5] }
  constructor() {
    this.usersList.push(this.demoUser)
  }

  loginCheck(loginUser: Users):any {
    var found: Users[] = this.usersList.filter(
      user => {
        return JSON.stringify(user.emailId).toLowerCase().includes(loginUser.emailId)
      }
    )
    if (found.length == 0)
      return -1 //userNotfound
    if (found.length == 1) {
      if (found[0].password == loginUser.password){
        this.currentUser=found[0]
        return 1 //userLoginSuccess
        
      }
      else
        return 0 //userPasswordInvalid
    }
  }

  getUserData():Users | null{
    return this.currentUser
  }

  registerNewUser(newUser:Users){
    newUser.userId = this.usersList.length
    this.usersList.push(newUser)
    console.log(JSON.stringify(this.usersList))
  }
  
  logoutUser(){
    this.currentUser = null
    console.log(JSON.stringify(this.currentUser))
  }

  isLikedArtWork(prodId:number){
    return this.currentUser?.likedArtworks.includes(prodId)
  }
  addLikedArtWork(prodId:number){
    this.currentUser?.likedArtworks.push(prodId)
  }
  removeLikedArtWork(prodId:number){
    let ind:any = this.currentUser?.likedArtworks.indexOf(prodId)
    this.currentUser?.likedArtworks.splice(ind,1)
  }
}
