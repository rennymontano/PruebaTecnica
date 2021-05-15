import { GetDataService, ErrorService, GetDataNoticias, GetDataImagen} from './app.action';
import { NoticiasEffects } from './app.effects';
import { getDataTotal, getImagen } from './app.reducer';
import { SelectNoticiaData, SelectNoticiasData, SelectImagenData } from './app.selector';

export const fromRoot = {
    GetDataService, 
    ErrorService, 
    GetDataNoticias,
    GetDataImagen,
    NoticiasEffects,
    getDataTotal,
    getImagen,
    SelectNoticiaData,
    SelectNoticiasData,
    SelectImagenData
};