import { Country } from '../../countries/models/country';
import { createAction, props } from '@ngrx/store';

export const load = createAction(
      '[Country] Cargar paises',
);

export const loadedItems = createAction(
      '[Country] Cargados paises',
      props<{ countries: any }>()
);

