import { NgFor } from '@angular/common';
import { Component, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myfirstngapp');

  firstName = 'Nikhil';
  lastName = 'Shah';
  age = 22;
  gender = 'Male';
  email = 'nikhilshah@example.com';

  hobbies = ['Coding', 'Reading', 'Watching Movies', 'Sleeping', 'Listening to Music','Driving'];

  greetUser() {
   alert('Welcome to angular');
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

}
