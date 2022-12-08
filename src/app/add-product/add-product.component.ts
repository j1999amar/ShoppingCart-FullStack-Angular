import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private api: ApiService,private router:Router) {}
  productName = '';
  imageLink = '';
  category = '';
  description = '';
  price = '';
  readValue = () => {
    let data:any= {
      "productName": this.productName,
      "imageLink": this.imageLink,
      "category": this.category,
      "description": this.description,
      "price": this.price,
    };
    this.api.sendData(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          this.productName = '';
          this.imageLink = '';
          this.category = '';
          this.description = '';
          this.price = '';        
        }else{
          alert("failed to add")
        }
      }
    )
  };
}
