import { Component, OnInit } from '@angular/core';
import { Artworks } from 'src/app/model/artworks';
import { ArtworkdataService } from 'src/app/service/artworkdata.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-artist-corner',
  templateUrl: './artist-corner.component.html',
  styleUrls: ['./artist-corner.component.css']
})
export class ArtistCornerComponent implements OnInit {

  query=""  
  constructor(private artDataService:ArtworkdataService, private logService:LoginService) { }
  productList:Artworks[]=this.artDataService.getProductList()
  ngOnInit(): void {

  }


}
