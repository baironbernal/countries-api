import { createReducer, on } from '@ngrx/store';
import * as  actions from '../actions/country.actions';
import { Country } from '../../countries/models/country';


export const initialState: Country[] = [{
  name: '',
  area: 1,
  capital: [],
  flags: { png: '', svg: ''},
  subregion: '',
  region: '',
  population: 1
}];

const _countryReducer = createReducer(
  initialState,
  on(actions.load, (state) => { return { ...state } }),
  on(actions.loadedItems, (state, { countries }) => { return countries }),
  
);

export function countryReducer (state: any, action: any) {
      return _countryReducer(state, action)
}