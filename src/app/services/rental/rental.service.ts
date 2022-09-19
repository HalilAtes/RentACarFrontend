import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/ListResponseModel';
import { Rental } from 'src/app/models/rental/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'http://localhost:61697/api/';
 
  rentals : Rental[] = [];
  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "Rentals/getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
