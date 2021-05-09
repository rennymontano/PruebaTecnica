import { Action } from '@ngrx/store';

export interface appState {
    texto: string
}

export const initialState = {
    texto : 'Codigo'
}

export function noticiaReducer(state: appState = initialState , action: Action){
    console.log(action);
}