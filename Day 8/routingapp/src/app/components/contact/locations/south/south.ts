import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-south',
  imports: [NgFor],
  templateUrl: './south.html',
  styleUrl: './south.css'
})
export class South {
offices = [
    {name: 'south 1', phone: 123456789, email: 'south1@org.com'},
    {name: 'south 2', phone: 123456789, email: 'south2@org.com'},
    {name: 'south 3', phone: 123456789, email: 'south3@org.com'},
    {name: 'south 4', phone: 123456789, email: 'south4@org.com'}
  ]
}
