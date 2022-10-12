import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ProdModel} from './ProdModel';
import { Observable} from 'rxjs';​

@Injectable({providedIn: 'root'})
export class ProdService {
  url = 'http://localhost:3000'; //http://localhost:4200/prod-add
  constructor(private http: HttpClient) { }
// insert a product
  productInsert(prod:any) {
    console.log(prod);
    this.http.post(this.url + 'productInsert', prod)
        .subscribe(res => console.log('Done'));
  }
// find all products, and return a promise of all products
  productFind(){
    return this.http.get<ProdModel[]>(this.url + 'productFind');
  }
// update products with proQuery and set prodUpdate, returnning a promise
  productUpdate(prodQuery:any, prodUpdate:any){
  const queryUpdate = {query: prodQuery, update: prodUpdate};
  return this.http.put(this.url + 'productUpdate', queryUpdate);
  }
// delete a product
  productDelete(prod:any) {
    console.log(prod);
    this.http.post(this.url + 'productDelete',prod)
        .subscribe(res => console.log('Done'));
  }
}
