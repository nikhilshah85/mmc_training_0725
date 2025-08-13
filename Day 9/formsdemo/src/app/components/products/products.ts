import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [NgFor, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

    productsList:any[] = ['Pepsi','Maggie','Doritos', 'Lays'];
    product = '';


    addProduct(product: string) {
        this.productsList.push(product);
    }

    deleteProduct(index: number) {
        this.productsList.splice(index, 1);
    }

    updateProduct(index: number, product: string) {
        this.productsList[index] = product;
    }

}
