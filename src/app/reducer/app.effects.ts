import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { NoticiasService } from '../services/noticias.service';
import * as fromAction from './app.action';

@Injectable({
    providedIn: 'root'
})
export class NoticiasEffects {
 
  constructor(
    private actions$: Actions,
    private noticiasService: NoticiasService
  ) {}

  getDataNoticias$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAction.GetDataNoticias),
      mergeMap((action)=>{
        return this.noticiasService.getListNoticias().pipe(
          map((res => fromAction.GetDataService({data: res}))),
          catchError(error => of(fromAction.ErrorService({error})))
        );
      })
    );

  });


}