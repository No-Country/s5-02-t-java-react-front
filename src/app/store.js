import { configureStore } from '@reduxjs/toolkit'
import usuariosReducer from 'features/reducers/usuariosSlice'

export const store = configureStore({
  reducer: {
    usuariosStore: usuariosReducer
  },
})
