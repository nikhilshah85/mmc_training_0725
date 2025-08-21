import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonLabel} from '@ionic/angular/standalone';
import { IonRouterLinkWithHref } from "../../../node_modules/@ionic/angular/standalone/navigation/router-link-delegate";
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterModule, RouterLink,IonLabel],
})
export class HomePage {
  constructor() {}
}
