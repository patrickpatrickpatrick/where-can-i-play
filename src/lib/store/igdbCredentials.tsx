import { createSlice } from '@reduxjs/toolkit'

interface igdbCredentials {
  accessToken: string|null,
  clientId: string|undefined,
  clientSecret: string|undefined,
}

const initialIgdbCredentialsState: igdbCredentials = {
  accessToken: null,
  clientId: process.env.IGDB_ID,
  clientSecret: process.env.IGDB_SECRET,  
} 

export const igdbCredentialsSlice = createSlice({
  name: "igdbCredentials",
  initialState: initialIgdbCredentialsState,
  reducers: {
    updateAccessToken: (state, { payload: { accessToken }}) => {
        state.accessToken = accessToken
    }        
  }
});