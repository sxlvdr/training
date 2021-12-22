import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result} from '../model/countries.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient:  HttpClient) {}

  loadCountries(){

    const url  = 'https://restcountries.com/v3.1/all';
    return this.httpClient.get<Result>(url);
  }
}
