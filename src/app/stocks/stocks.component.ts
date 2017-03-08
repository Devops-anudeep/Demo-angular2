import { Component, OnInit } from '@angular/core';
// import {Component} from '@angular/core';

@Component({
  selector: 'stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
	selectedValue: string;
	selectedValue1: string;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() {


  }

  ngOnInit() {
  }

  onchange(){
	  
	this.selectedValue1 = "Tacos";  
  }
}
