import { Component } from '@angular/core';
import { Greetings } from '../../services/greetings';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {


  _greetingsObj:Greetings;
  
    constructor(_greetingsREF:Greetings){
      this._greetingsObj = _greetingsREF;
    }
}
