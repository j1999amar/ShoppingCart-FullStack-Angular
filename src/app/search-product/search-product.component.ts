import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  constructor(private api:ApiService){}
  productName=""
  data:any=[]
  readValue=()=>{
    let data ={"productName":this.productName}
    this.api.searchData(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response
        this.productName=""

      }
    )

  }

}
