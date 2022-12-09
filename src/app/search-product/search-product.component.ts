import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {  data:any=[]

  constructor(private api:ApiService){
    this.api.fetchData().subscribe(
      (response:any)=>{
        this.data=response
        console.log(this.data)

      }
    )

    
  }
  

  productName=""

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
  deleteitem=(delId:any)=>{
    console.log(delId)
let deleteItem={"id":delId}
    this.api.deleteProduct(deleteItem).subscribe(
      (response)=>{
      }
    )
    this.productName=""
    window.location.reload()
  }
}
