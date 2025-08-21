import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonList,IonItem,IonLabel,IonIcon, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonList,IonItem,IonLabel,NgFor,IonIcon],
})
export class HomePage {
  constructor() {}

  developedBy = 'Nikhil Shah';

  /**
   * Alert the user with a welcome message.
   */
  greetUser()
  {
    alert('Welcome to Mobile App Development');
  }

  produtList = [{pId:101, pName:'Bag',pBrand:'Levis',pPrice:5000},
                {pId:102, pName:'Shirt',pBrand:'Nike',pPrice:4000},
                {pId:103, pName:'T-Shirt',pBrand:'LV',pPrice:9000},
                {pId:104, pName:'Jeans',pBrand:'Adidas',pPrice:7000},
                {pId:105, pName:'Shoes',pBrand:'Nike',pPrice:10000}];

}
