import { createSlice } from '@reduxjs/toolkit'

import { getAllHouses } from 'features/actions/housesActions'

// estado inicial
const initialState = {
  houses: [],
  house: {},
  loading: null,
  currentPage: 1,
  totalPages: 0,
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
    setPrevius: (state) => {
      if (state.totalPages === state.currentPage) state.currentPage = 1
      else state.currentPage = state.currentPage + 1
    },
    setNext: (state) => {
      if (state.currentPage === 1) state.currentPage = state.totalPages
      else state.currentPage = state.currentPage - 1
    },
    setCurrent: (state, { payload }) => {
      state.currentPage = payload
    }
  },
  extraReducers: {
    // peticiones al backend
    [getAllHouses.pending]: (state) => { state.loading = true },
    [getAllHouses.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.houses = payload.data
      state.currentPage = payload.currentPage + 1
      state.totalElements = payload.totalElements
      state.totalPages = Math.ceil(state.totalElements / 6)
    },
    [getAllHouses.rejected]: (state, { payload }) => {
      state.loading = false
      state.msg = payload
    }
  },
})
export const { cambiarCargando, setCurrent, setNext, setPrevius } = housesSlice.actions
export default housesSlice.reducer
