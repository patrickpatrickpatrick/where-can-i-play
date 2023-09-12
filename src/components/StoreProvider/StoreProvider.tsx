"use client";

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import { arcades, igdbCredentials, games } from './../../lib/store/index';
import { ReactNode } from 'react';

const arcadesReducer = arcades.reducer;
const gameReducer = games.reducer;
const igdbCredentialsReducer = igdbCredentials.reducer;

const store = configureStore({
  reducer: {
    arcades: arcadesReducer,
    game: gameReducer,
    igdbCredentials: igdbCredentialsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

interface props  { 
  children: ReactNode
}

export const StoreProvider = ({ children }: props) => <Provider store={store}>{children}</Provider>