import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  cardetails: Car[] = [];
  currentCar: Car = {
    carName: '',
    brandId: 0,
    brandName: '',
    colorId: 0,
    colorName: '',
    dailyPrice: 0,
    id: 0,
    modelYear: 0,
  };

  dataLoaded = false;
  // carResponseModel:CarResponseModel={
  //   data : this.cars,
  //   message:"",
  //   success :true
  // };

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarDetailsByBrands(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailsByColors(params['colorId']);
      } else if (params['carId']) {
        this.getCarById(params['carıd']);
      } else {
        this.getCarsDetails();
      }
    });
    //  this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCars(car: Car) {
    this.currentCar = car;
  }

  getCarDetailsByBrands(brandId: number) {
    this.carService.getCarDetailsByBrands(brandId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColors(colorId: number) {
    this.carService.getCarDetailsByColors(colorId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  
}
