import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-view-product',
  templateUrl: './user-view-product.component.html',
  styleUrls: ['./user-view-product.component.css']
})
export class UserViewProductComponent {
  data:any=[]

  constructor(private api:ApiService){
    this.api.fetchData().subscribe(
      (response:any)=>{
        this.data=response

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

}
