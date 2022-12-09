import { createSlice } from '@reduxjs/toolkit'

import { getAllHouses, getHouseById, getHouseByName, getHousesPrediction } from 'features/actions/housesActions'

// estado inicial
const initialState = {
  searchPredictions: [],
  houses: [],
  house: {},
  loading: null,
  currentPage: 1,
  totalPages: 0,
  totalElements: 0,
  msg: "",
  search: "",
  order: {
    dir: "",
    name: ""
  }
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
    },
    setSearch: (state, { payload }) => {
      state.search = payload
    },
    setOrder: (state, { payload }) => {
      state.order.name = payload.split("-")[0]
      state.order.dir = payload.split("-")[1]
    },
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
    },
    [getHousesPrediction.pending]: (state) => { state.loading = true },
    [getHousesPrediction.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.searchPredictions = payload.data
    },
    [getHousesPrediction.rejected]: (state) => { state.loading = false },
    [getHouseById.pending]: (state) => { state.loading = true },
    [getHouseById.fulfilled]: (state, { payload }) => {
      state.loading = true
      state.house = payload
    },
    [getHouseById.rejected]: (state, { payload }) => {
      state.loading = false
      state.msg = payload
    },
    [getHouseByName.pending]: (state) => { state.loading = true },
    [getHouseByName.fulfilled]: (state, { payload }) => {
      state.loading = true
      state.houses = payload
    },
    [getHouseByName.rejected]: (state, { payload }) => {
      state.loading = false
      state.msg = payload
    },
  },
})
export const { cambiarCargando, setCurrent, setNext, setPrevius, setSearch, setOrder } = housesSlice.actions
export default housesSlice.reducer
