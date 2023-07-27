import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selectedProduct: string;
  IsChecked:boolean;
  constructor() { }

  ngOnInit() {
  }

  getProductValue(product){
    this.selectedProduct = product.target.value;
    console.log('ngswitch', product.target.value);
  }
    onChange(value){
    console.log(value.target.value);
    this.IsChecked=value.target.value;
    }
}
