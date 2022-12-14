import { Component, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() country: Country = {name: '', area: 1, capital: [], flags: {png:'', svg:'',}, population: 1, subregion: '', region: ''}
  
  constructor() {}

  ngOnInit(): void {
    console.log(this.country)
  }
}
