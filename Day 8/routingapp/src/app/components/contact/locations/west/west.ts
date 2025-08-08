import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-west',
  imports: [NgFor],
  templateUrl: './west.html',
  styleUrl: './west.css'
})
export class West {
offices = [
    {name: 'west 1', phone: 123456789, email: 'west1@org.com'},
    {name: 'west 2', phone: 123456789, email: 'west2@org.com'},
    {name: 'west 3', phone: 123456789, email: 'west3@org.com'},
    {name: 'west 4', phone: 123456789, email: 'west4@org.com'}
  ]
}
