import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {
  apiUrl = 'http://localhost:61697/api/';

  constructor(private httpClient:HttpClient) { }

  // getCarImage(carId:number):Observable


}
