import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Whoisthisuser } from '../../services/whoisthisuser';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';

  _whois:Whoisthisuser;
  constructor(_whoREF:Whoisthisuser)
  {
    this._whois = _whoREF;
  }

}
