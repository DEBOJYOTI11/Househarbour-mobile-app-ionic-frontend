import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {IListing } from '../../data/interface';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the DataproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataproviderProvider {

  private env = `https://househarbour.herokuapp.com`;
  // env = `http://localhost:3000`;

  constructor(public http: HttpClient) {
    console.log('Hello DataproviderProvider Provider');
  }

  getListings():Observable<IListing[]>{
    return this.http.get<IListing[]>(`${this.env}/listings`);
  }
}
