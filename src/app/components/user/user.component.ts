import { Component, OnInit } from '@angular/core';
import { Artworks } from 'src/app/model/artworks';
import { Users } from 'src/app/model/users';
import { ArtworkdataService } from 'src/app/service/artworkdata.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: Users | null
  productList: Artworks[] = []
  myArtworks: Artworks[] = []
  likedArtworks: Artworks[] = []
  constructor(private loginService: LoginService, private artDataService: ArtworkdataService) {
    this.currentUser = loginService.getUserData()
    this.productList = this.artDataService.getProductList()
    if (this.currentUser != null) {
      this.productList.forEach((value, index) => {
        if (this.currentUser?.likedArtworks.includes(value.prodId)) {
          this.likedArtworks.push(value)
        }
      })
      if (this.currentUser?.isArtist) {
        this.productList.forEach((value,index)=>{
          if(value.artistName==this.currentUser?.name){
            this.myArtworks.push(value)
          }
        })
      }
    }
  }
  ngOnInit(): void {
  }
  newArt:Artworks = new Artworks
  addProduct(){
    this.newArt.artistName=JSON.stringify(this.currentUser?.name)
    this.newArt.artistName=this.newArt.artistName.substring(1,this.newArt.artistName.length-1)
    this.myArtworks.push(this.artDataService.addProducttoList(this.newArt)) 
    this.newArt=new Artworks()
  }
  removeProduct(item:Artworks){
    this.artDataService.removeProducttoList(item)
    var ind=this.myArtworks.indexOf(item)
    this.myArtworks.splice(ind,1)
  }

  logout() {
    this.loginService.logoutUser()
  }

}
