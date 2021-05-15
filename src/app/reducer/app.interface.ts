export interface appState { data: any, error: any };
export interface imgState { id: any, urlimg: any };

export const initialStateNT: appState = { data: null, error: null };
export const initialStateImg: imgState = { id: null, urlimg: null };


export const fromIntf = {
    initialStateNT,
    initialStateImg
};