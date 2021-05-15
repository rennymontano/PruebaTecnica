import { createAction, props } from '@ngrx/store';

//Componentes
export const GetDataNoticias = createAction('[NOTICIAS] Get Data Noticias')
export const GetDataNoticiasById = createAction('[NOTICIAS] Get Data Noticias', props<{id: string}>())

//Efecto
export const GetDataService = createAction('[NOTICIAS] Get Data Service', props<{data: any}>());
export const ErrorService = createAction('[NOTICIAS] Error Srvice', props<{error: any}>())
