import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingsPipe } from './pipes/greetings-pipe';
import { GendergreetingPipe } from './pipes/gendergreeting-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UpperCasePipe,
    LowerCasePipe,CurrencyPipe,JsonPipe, DatePipe, GreetingsPipe,NgFor,GendergreetingPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes_demo');

  firstName = 'Nikhil';
  lastName = 'Shah';
  salary = 1000;
  product = {pId:101,pName:'Laptop',price:50000, pIsInStock:true};
  orderData = new Date();

  //create json object array of 10 employees with empNo, empName, empGender, empDesignation, empSalary and empIsPermenant
  employees = [
    
    {"empNo":1,"empName":"Nikhil","empGender":"Male","empDesignation":"Developer","empSalary":10000,"empIsPermenant":true},
    {"empNo":2,"empName":"Rohit","empGender":"Male","empDesignation":"Developer","empSalary":10000,"empIsPermenant":true},
    {"empNo":3,"empName":"Riya","empGender":"Female","empDesignation":"Developer","empSalary":10000,"empIsPermenant":true},
    {"empNo":4,"empName":"Priya","empGender":"Female","empDesignation":"Developer","empSalary":10000,"empIsPermenant":true},
    {"empNo":5,"empName":"Ramesh","empGender":"Male","empDesignation":"Developer","empSalary":10000,"empIsPermenant":true},
    {"empNo":6,"empName":"Rajesh","empGender":"Male","empDesignation":"Developer","empSalary":10000,"empIsPermenant":true},
    {"empNo":7,"empName":"Anjali","empGender":"Female","empDesignation":"Developer","empSalary":10000,"empIsPermenant":true},
    {"empNo":8,"empName":"Rajesh","empGender":"Male","empDesignation":"Developer","empSalary":10000,"empIsPermenant":true},
    {"empNo":9,"empName":"Ramesh","empGender":"Male","empDesignation":"Developer","empSalary":10000,"empIsPermenant":true},
    {"empNo":10,"empName":"Mansi","empGender":"Female","empDesignation":"Developer","empSalary":10000,"empIsPermenant":true},
  
  ];


}
