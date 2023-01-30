import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }


  getProducts(shopParams:ShopParams){
    let params = new HttpParams();

    if(shopParams.brandId !== 0){
      params = params.append('brandId', shopParams.brandId.toString());
    }
    
    if(shopParams.typeId !==0 ){
      params = params.append('typeId',shopParams.typeId.toString());
    }
    
    if(shopParams.search){
      params = params.append('search',shopParams.search);
    }
      
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageIndex', shopParams.pageSize.toString());
    


    return this.http.get<IPagination>(this.baseURl + 'products',{observe: 'response',params})
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseURl + 'products/brands')
  }
  getTypes(){
    return this.http.get<IType[]>(this.baseURl + 'products/types')
  }
}
