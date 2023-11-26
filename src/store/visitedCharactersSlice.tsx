
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


import { Character } from '../interfaces';


export interface VisitedCharactersState {
  characters: Character[]
}

const initialState: VisitedCharactersState = {
  characters: JSON.parse(localStorage.getItem('visitedCharacters') || '[]'),
}


export const visitedCharactersSlice = createSlice({
  name: 'visitedCharacters',
  initialState,
  reducers: {

    addVisited: (state, action: PayloadAction<Character>) => {
      
      const existingCharacter = state.characters.find(character => character.id === action.payload.id);

      if (existingCharacter) {
        state.characters = state.characters.filter(character => character.id !== action.payload.id);
      }

      state.characters.push(action.payload);

      if (state.characters.length > 5) {
        state.characters.shift(); 
      }

      localStorage.setItem('visitedCharacters', JSON.stringify(state.characters));


    }
  }

});

export const { addVisited } = visitedCharactersSlice.actions