import { configureStore } from '@reduxjs/toolkit'
import usersReducer from 'features/reducers/usuariosSlice'
import housesReducer from "features/reducers/housesSlice"

export const store = configureStore({
  reducer: {
    usersStore: usersReducer,
    housesStore: housesReducer
  },
})
