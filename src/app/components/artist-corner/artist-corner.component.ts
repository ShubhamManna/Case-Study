import { Component, OnInit } from '@angular/core';
import { Artworks } from 'src/app/model/artworks';
import { ArtworkdataService } from 'src/app/service/artworkdata.service';

@Component({
  selector: 'app-artist-corner',
  templateUrl: './artist-corner.component.html',
  styleUrls: ['./artist-corner.component.css']
})
export class ArtistCornerComponent implements OnInit {

  query=""  
  constructor(private artDataService:ArtworkdataService) { }
  productList:Artworks[]=this.artDataService.getProductList()
  ngOnInit(): void {

  }


}
