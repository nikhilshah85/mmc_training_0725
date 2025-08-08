import { Component } from '@angular/core';
import { Greetings } from '../../services/greetings';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  //this is a dependency injection
  _greetingsObj:Greetings;

  constructor(_greetingsREF:Greetings){
    this._greetingsObj = _greetingsREF;
  }


}
