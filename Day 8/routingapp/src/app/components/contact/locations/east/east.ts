import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-east',
  imports: [NgFor],
  templateUrl: './east.html',
  styleUrl: './east.css'
})
export class East {
  offices = [
    {name: 'East 1', phone: 123456789, email: 'east1@org.com'},
    {name: 'East 2', phone: 123456789, email: 'east2@org.com'},
    {name: 'East 3', phone: 123456789, email: 'east3@org.com'},
    {name: 'East 4', phone: 123456789, email: 'east4@org.com'}
  ]

}
