import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand/brand';
import { ListResponseModel } from 'src/app/models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'http://localhost:61697/api/';

  brands : Brand[] = [];
  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "Brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
