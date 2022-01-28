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
    }
  }
  ngOnInit(): void {
  }

  logout() {
    this.loginService.logoutUser()
  }

}
