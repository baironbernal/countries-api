import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-region',
  templateUrl: './filter-region.component.html',
  styleUrls: ['./filter-region.component.scss']
})
export class FilterRegionComponent {

  dataSuscription: Subscription = new Subscription; 

  constructor(private dataServ: DataService){}

  ngOnInit(){}

  filterByName(region: string) {
    this.dataSuscription = this.dataServ.getByRegion(region).subscribe(items => console.log)   
  }

}
