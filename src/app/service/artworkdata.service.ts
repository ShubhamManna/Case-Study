import { Injectable } from '@angular/core';
import { Artworks } from '../model/artworks';

@Injectable({
  providedIn: 'root'
})
export class ArtworkdataService {
  private artWork:Artworks=new Artworks()
  private productList:Artworks[]=[]
  constructor() {
    this.productList=[
      {productName:"Oil Painting 1",artistName:"Leo",prodId:1,price:1000,quantity:1,likes:14},
      {productName:"Wood sculpture",artistName:"Angelo",prodId:2,price:3000,quantity:1,likes:24},
      {productName:"Knife painting",artistName:"Lisa",prodId:3,price:5000,quantity:1,likes:34},
      {productName:"Stone sculpture",artistName:"Michael",prodId:4,price:6000,quantity:1,likes:44},
      {productName:"Papier machhe",artistName:"Ravi",prodId:5,price:2000,quantity:1,likes:64},
    ]
   }

   getProductList(){
     return this.productList
   }

   addLikes(pr:Artworks){
      let ind = this.productList.indexOf(pr)
      this.productList[ind].likes+=1;
   }
   removeLikes(pr:Artworks){
    let ind = this.productList.indexOf(pr)
    this.productList[ind].likes-=1;
   }
   addProducttoList(item:Artworks){
    item.prodId=this.productList.length+1
    this.productList.push(item)
    return item
   }
   removeProducttoList(item:Artworks){
    var ind=this.productList.indexOf(item)
    this.productList.splice(ind,1)
   }
}
