import { createReducer, on } from '@ngrx/store';
import { GetDataService, ErrorService, GetDataImagen} from '../reducer/app.action';
import { fromIntf } from './app.interface'



export const getDataTotal = createReducer(fromIntf.initialStateNT,
    on(GetDataService, (state, action)=> ({data: action.data, error: null})),
    on(ErrorService, (state, action)=> ({data: null, error: action.error}))    
);

export const getImagen = createReducer(fromIntf.initialStateImg,
    on(GetDataImagen, (state, action)=> ({id: action.id, urlimg: action.urlimg})),  
);
