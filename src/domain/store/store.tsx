
import { configureStore } from "@reduxjs/toolkit";
import { rickMortySlice } from "./characters/rickMortySlice";

export const store = configureStore({


  reducer: {
    [rickMortySlice.reducerPath] : rickMortySlice.reducer, 
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickMortySlice.middleware),

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
