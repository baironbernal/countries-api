import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  countries: any[] =[];

  constructor(private dataSer: DataService) {}

  ngOnInit() {
    this.getCountries()
  }

  trackByItem(index: Number, item: any){
    return item.id;
  } 

  getCountries() {
     this.dataSer.getDataApi().subscribe((items) => {
      let i= items.map(e => {
        return {
          name: e.name.official,
          population: e.population,
          region: e.region,
          subregion: e.subregion,
          capital: e.capital,
          flags: e.flags
        }
      })
      this.countries = i;
    });

    

    console.log(this.countries)
  }
}
