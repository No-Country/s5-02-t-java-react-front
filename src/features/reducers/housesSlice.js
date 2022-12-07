import { createSlice } from '@reduxjs/toolkit'

import { getAllHouses } from 'features/actions/housesActions'


// estado inicial
const initialState = {
  houses: [],
  house: {},
  loading: null,
  currentPage: 1,
  totalElements: 0,
  msg: ""
}

// reducers para usuarios
const housesSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.loading = !state.loading
    },
  },
  extraReducers: {
    // peticiones al backend
    [getAllHouses.pending]: (state) => { state.loading = true },
    [getAllHouses.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.houses = payload.data
      state.currentPage = payload.currentPage
      state.totalElements = payload.totalElements
    },
    [getAllHouses.rejected]: (state, { payload }) => {
      state.loading = false
      state.msg = payload
    }
  },
})
export const { cambiarCargando } = housesSlice.actions
export default housesSlice.reducer
