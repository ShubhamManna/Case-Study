import { Injectable } from '@angular/core';
import { Artworks } from '../model/artworks';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList:Cart[]=[]
  private cartItem:Cart=new Cart()
  private GrandTotal=0
  constructor() { }

  addToCartList(item:Artworks){
    var found: Boolean = false
    this.cartList.forEach((value, index) => {
      if (value.product.prodId == item.prodId) {
        value.cartQuantity += item.quantity
        value.totalCost += item.price * item.quantity
        this.GrandTotal += item.price * item.quantity
        found = true
      }
    })
    if (!found) {
      this.cartItem.product = item
      this.cartItem.cartQuantity = item.quantity
      this.cartItem.totalCost = item.price * item.quantity
      this.cartList.push(this.cartItem)
      this.GrandTotal += item.price * item.quantity
      this.cartItem = new Cart()
    }
  }
  getItems(){
    return this.cartList
  }
}
