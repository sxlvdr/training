import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public countries: any = [];
  public sortCountries: any = [];


  title = 'assesment-app';
  
  constructor(private countriesService: CountriesService) {
   }

  ngOnInit(): void {
     this.countriesService.loadCountries()
     .subscribe( (resp) =>{

      console.log(resp);
      this.countries= resp;

     });
  }

}