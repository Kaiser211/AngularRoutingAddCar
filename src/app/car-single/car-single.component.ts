import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from './../car.service';
import  { Car } from '../car';


@Component({
  selector: 'app-car-single',
  templateUrl: './car-single.component.html',
  styleUrls: ['./car-single.component.css']
})
export class CarSingleComponent implements OnInit {

	car: Car;

  constructor(
  	private _route: ActivatedRoute,
  	private _carService: CarService
  	) {
  		this._route.params.subscribe(params => {
  			this.car = this._carService.getCarById(parseInt(params.id));
  		});
   }

  ngOnInit() {
  }

}
