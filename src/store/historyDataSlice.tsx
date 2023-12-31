

import { createSlice } from '@reduxjs/toolkit'


export interface HistoryDataState {
  lastPage: number, 
}

const initialState : HistoryDataState = {

  lastPage: Number( localStorage.getItem('lasPage')) || 1, 

}

export const historyDataSlice =  createSlice({
  name: 'historyData',
  initialState,
  reducers: {

    nextPage: (state) => {
      state.lastPage = state.lastPage + 1;
      localStorage.setItem('lastPage', state.lastPage.toString());
    }, 

    previousPage: (state) => {
      if (state.lastPage > 1) {
        state.lastPage = state.lastPage - 1 ;
      }
      localStorage.setItem('lastPage',state.lastPage.toString());
    }, 
    resetStatePage: (state)=> {
      state.lastPage = 1;

    }

  }
});


export const { nextPage, previousPage, resetStatePage} = historyDataSlice.actions;