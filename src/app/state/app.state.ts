import { ActionReducerMap } from '@ngrx/store';

import { Country } from '../countries/models/country';
import { countryReducer } from './reducers/country.reducer';

export interface AppState {
   countries: Country[];
}

export const appReducers: ActionReducerMap<AppState> = {
   countries: countryReducer
}