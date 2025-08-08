import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data_in_angular');

  appName = 'Introduction to data in Angular'
		types_of_data = ['Primitive data type', 'Primitive data array', 'Json object','Array of json']

    productDetails = {pId:101,pName:'Pepsi',pPrice:100,pQty:2, pCategory:'SoftDrink'}


  }
