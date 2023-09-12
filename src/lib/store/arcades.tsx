import { createSlice } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query'


// // Define a service using a base URL and expected endpoints
// export const arcadeApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query<Pokemon, string>({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })

interface arcades {
  list: Location[],
  selected: string|null
}

const initialArcadesState: arcades = {
  list: [],
  selected: null
} 
  
export const arcadesSlice = createSlice({
  name: "arcades",
  initialState: initialArcadesState,
  reducers: {
    setList: (state, { payload: { list }}) => {
        state.list = list
    },
    setSelected: (state, { payload: { id } }) => {
        state.selected = id
    }
  }
});