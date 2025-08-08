import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-north',
  imports: [NgFor],
  templateUrl: './north.html',
  styleUrl: './north.css'
})
export class North {
offices = [
    {name: 'North 1', phone: 123456789, email: 'north1@org.com'},
    {name: 'North 2', phone: 123456789, email: 'north2@org.com'},
    {name: 'North 3', phone: 123456789, email: 'north3@org.com'},
    {name: 'North 4', phone: 123456789, email: 'north4@org.com'}
  ]

}
