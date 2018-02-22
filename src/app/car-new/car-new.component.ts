import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from './../car.service';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css']
})
export class CarNewComponent implements OnInit {

  newCar: Car = new Car();

  // newCar: Car = {
  // 	year: 0
  // 	make: '',
  // 	model: ''
 //}

  constructor(private _carService: CarService) { }

  ngOnInit() {
  }
  
  createCar(){
  	//console.log('test');
  	this._carService.createCar(this.newCar);
  	// Reset the new car
  	this.newCar = new Car();
  }
}
