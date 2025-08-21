import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { Whoisthisuser } from './services/whoisthisuser';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bankingapp');

    _whoisthisuser:Whoisthisuser;

    constructor(_whoREF:Whoisthisuser){
      this._whoisthisuser = _whoREF;
    }

}
