import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retryWhen } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }


  getProducts(){
    return this.http.get<IPagination>(this.baseURl + 'products?pageSize=50');
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseURl + 'products/brands')
  }
  getTypes(){
    return this.http.get<IType[]>(this.baseURl + 'products/types')
  }
}
