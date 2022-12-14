
import { createSelector } from '@ngrx/store'; //TODO <----

import { AppState } from '../app.state';

//TODO: Es el selector que tiene relacion con la propiedad "items"

export const selectCountriesFeature = (state: AppState) => state.countries;//TODO: PADRE

export const selectListItems = createSelector(
    selectCountriesFeature,
    (state: any) => state //TODO: HIJO
);

