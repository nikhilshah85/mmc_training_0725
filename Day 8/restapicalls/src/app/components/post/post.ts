import { Component } from '@angular/core';
import { Restdataser } from '../../services/restdataser';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [NgFor],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {
  
    _restdataser:Restdataser;
    constructor(restdata:Restdataser) {
      this._restdataser=restdata;      
    }

}
