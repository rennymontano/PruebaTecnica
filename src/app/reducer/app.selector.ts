import { createSelector, createFeatureSelector } from "@ngrx/store";
import { appState } from './app.reducer';


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