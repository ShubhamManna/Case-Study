import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artworks } from 'src/app/model/artworks';
import { Cart } from 'src/app/model/cart';
import { Users } from 'src/app/model/users';
import { ArtworkdataService } from 'src/app/service/artworkdata.service';
import { CartService } from 'src/app/service/cart.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser:Users | null = new Users()
  productList:Artworks[]=this.artDataService.getProductList()
  cartItems:Cart[]=[]
  constructor(private logService: LoginService,private router:Router, private artDataService:ArtworkdataService, private cartService:CartService) {
    this.currentUser = logService.getUserData()
  }
  ngOnInit(): void {
  }
  logout(){
    this.logService.logoutUser()
  }
  addLike(prod:Artworks){
    this.artDataService.addLikes(prod)
    this.logService.addLikedArtWork(prod.prodId)
  }
  removeLike(prod:Artworks){
    this.artDataService.removeLikes(prod)
    this.logService.removeLikedArtWork(prod.prodId)
  }
  isLiked(prodId:number){
    return this.logService.isLikedArtWork(prodId)
  }
  addToCart(prod:Artworks){
    this.cartService.addToCartList(prod)
    this.getCartItems()
  }
  getCartItems(){
    this.cartItems=this.cartService.getItems()
  }
}
