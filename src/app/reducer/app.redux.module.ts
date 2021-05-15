import { GetDataService, ErrorService, GetDataNoticias} from './app.action';
import { NoticiasEffects } from './app.effects';
import { getDataTotal } from './app.reducer';
import { SelectNoticiaData, SelectNoticiasData } from './app.selector';

export const fromRoot = {
    GetDataService, 
    ErrorService, 
    GetDataNoticias,
    NoticiasEffects,
    getDataTotal,
    SelectNoticiaData,
    SelectNoticiasData
};