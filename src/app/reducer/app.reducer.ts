import { createReducer, on } from '@ngrx/store';
import { GetDataService, ErrorService, GetDataNoticiasById} from '../reducer/app.action';

export interface appState {
    data: any,
    error: any
}

const initialState: appState = {
    data: null,
    error: null
};


export const getDataTotal = createReducer(initialState,
    on(GetDataService, (state, action)=> ({data: action.data, error: null})),
    on(ErrorService, (state, action)=> ({data: null, error: action.error}))    
);
