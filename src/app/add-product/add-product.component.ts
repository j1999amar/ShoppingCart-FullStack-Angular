import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private api: ApiService) {}
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
      }
    )
  };
}
