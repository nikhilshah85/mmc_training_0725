import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculate',
  imports: [FormsModule],
  templateUrl: './calculate.html',
  styleUrl: './calculate.css'
})
export class Calculate {
    firstNumber = 0; // this needs to be hooked with the html - first text box
    secondNumber = 0; //this needs to be hooked with the html - second text box so we can capture value
    addResult = 0;
    subResult = 0;
    mulResult = 0;
    divResult = 0;
 
    calculate(){
        this.addResult = this.firstNumber + this.secondNumber;
        this.subResult = this.firstNumber - this.secondNumber;
        this.mulResult = this.firstNumber * this.secondNumber;
        this.divResult = this.firstNumber / this.secondNumber;
    }

    // add(){
    //     this.addResult = this.firstNumber + this.secondNumber;
    // }
    // sub(){
    //     this.subResult = this.firstNumber - this.secondNumber;
    // }
    // mul(){
    //     this.mulResult = this.firstNumber * this.secondNumber;
    // }
    // div(){
    //     this.divResult = this.firstNumber / this.secondNumber;
    // }



}
