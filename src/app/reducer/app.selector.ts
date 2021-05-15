import { createSelector, createFeatureSelector } from "@ngrx/store";
import { appState, imgState } from './app.interface';


export const SelectNoticia = createFeatureSelector<appState>('getNoticias');
 
export const SelectNoticiasData = createSelector(
    SelectNoticia,
  (state: appState) => state.data
);

export const SelectNoticiaData = createSelector(
    SelectNoticia,
  (state: appState, props: any) => {
      if (state.data !== null)
        return state.data.filter((item: any) => item.id === props.id)
    }
);

export const SelectImagen = createFeatureSelector<imgState>('getImagenes');

export const SelectImagenData = createSelector(
  SelectImagen,
  (state: imgState) => state
);