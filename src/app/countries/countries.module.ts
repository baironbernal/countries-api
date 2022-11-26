import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FilterRegionComponent } from './filter-region/filter-region.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    SearchComponent,
    FilterRegionComponent,
    CardComponent,
    DetailComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
