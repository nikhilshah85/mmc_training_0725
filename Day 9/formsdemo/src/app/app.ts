import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculate } from "./components/calculate/calculate";
import { Products } from "./components/products/products";

@Component({
  selector: 'app-root',
  imports: [Calculate, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formsdemo');
}
