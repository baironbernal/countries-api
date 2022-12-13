import { Component, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() country:any;
  

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.country)
  }
}
