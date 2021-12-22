import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: [
  ]
})
export class CountriesComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
     this.countriesService.loadCountries()
     .subscribe( (resp) =>{

      console.log(resp)

     });
  }

}
