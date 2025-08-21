import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet,IonLabel } from '@ionic/angular/standalone';
import { HomePage } from "./home/home.page";
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, RouterModule,RouterLink,IonLabel],
})
export class AppComponent {
  constructor() {}
}
