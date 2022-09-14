import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';
import { ListResponseModel } from 'src/app/models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:61697/api/';
  
 

  constructor(private httpClient: HttpClient) {}


  
  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByBrands(brandId : number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getbybrand?brandId=" +brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

   
  getCarsByBrand(brandId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getbybrand?brandId=" +brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


  getCarsDetails(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "Cars/getallcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  

}
