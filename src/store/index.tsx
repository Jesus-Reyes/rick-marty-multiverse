
import { configureStore } from "@reduxjs/toolkit";
import { rickMortyApi } from "../api/rickMortyApi";
import { historyDataSlice } from "./historyDataSlice";


export const store = configureStore({


  reducer: {
    [rickMortyApi.reducerPath] : rickMortyApi.reducer, 
    historyData: historyDataSlice.reducer
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickMortyApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
