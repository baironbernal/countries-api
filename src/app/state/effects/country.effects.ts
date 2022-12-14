import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'; //TODO <---
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Injectable()
export class ItemsEffects {

    load$ = createEffect(() => this.actions$.pipe(
        ofType('[Country] Cargar paises'),
        mergeMap(() =>  this.dataService.getDataApi()//TODO Retorna la data [...]
            .pipe(
                map(countries => ({ type: '[Country] Cargados paises',  countries})),
                catchError(() => EMPTY)
            ))
    ));

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) { }
}