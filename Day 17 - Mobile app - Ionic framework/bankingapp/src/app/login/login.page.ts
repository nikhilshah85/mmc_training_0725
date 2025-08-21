import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton } from '@ionic/angular/standalone';
import { Security } from '../services/security';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton]
})
export class LoginPage implements OnInit {

  greet()
  {
    alert('Hello');
    this._security.takeCredentials(this.userName,this.password);
  }

   userName: string = '';
  password: string = '';
  _security:Security;

  constructor(_seccurityREF:Security)
  {
    this._security = _seccurityREF 
  } 
  

 





  ngOnInit() {
  }

}
