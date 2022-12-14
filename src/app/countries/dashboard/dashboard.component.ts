import { selectListItems } from '../../state/selectors/country.selectors';
import { Component } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { load } from '../../state/actions/country.actions';
import { AppState } from 'src/app/state/app.state';
import { Country } from '../models/country';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  countries$: Observable<Country[]> = this.store.select(selectListItems);
  dataSuscription: Subscription = new Subscription;
  
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.countries$.subscribe(items => console.log(items))
    this.store.dispatch(load())
  }

  trackByItem(index: Number, item: any) {
    return item.id;
  } 

  ngOnDestroy() {
    //this.dataSuscription.unsubscribe()
  }
}
