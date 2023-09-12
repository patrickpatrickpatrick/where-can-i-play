import { createSlice } from '@reduxjs/toolkit';

interface game {
  id: string|null
}
  
const initialGameState: game = {
  id: null
}
  
export const gamesSlice = createSlice({
  name: "arcades",
  initialState: initialGameState,
  reducers: {
    setGame: (state, { payload: { id }}) => {
        state.id = id
    },
  }
})