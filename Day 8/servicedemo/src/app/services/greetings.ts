import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Greetings {

    cartValue = 0;
    developerName = 'Nikhil Shah';
    greetings()
    {
      alert('Hello and welcome to our store ' + this.developerName);
    }

    addToCart()
    {
      this.cartValue = this.cartValue + 1;
    }


}
