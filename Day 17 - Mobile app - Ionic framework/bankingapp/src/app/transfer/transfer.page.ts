import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton } from '@ionic/angular/standalone';
import { Security } from '../services/security';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonNavLink, IonButton]
})
export class TransferPage implements OnInit {


  _security:Security;

  constructor(_secRef:Security) 
  
  {this._security = _secRef; }

  ngOnInit() {
  }

}
