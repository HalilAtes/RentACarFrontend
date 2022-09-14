import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { Car } from 'src/app/models/car/car';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  cardetails: Car[] = [];
  dataLoaded = false;
  // carResponseModel:CarResponseModel={
  //   data : this.cars,
  //   message:"",
  //   success :true
  // };

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarDetailsByBrands(params['brandId']);
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

  getCarDetailsByBrands(brandId : number) {
    this.carService.getCarDetailsByBrands(brandId).subscribe((response) => {
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

 
}
