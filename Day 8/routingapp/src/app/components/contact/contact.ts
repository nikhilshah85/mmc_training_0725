import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
    componentName = 'Contact';
    phoneNo = 1223772324;
    customerCare = 1800180012341234
    email ="someone@somewhere.com";
}
