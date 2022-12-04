import { configureStore } from '@reduxjs/toolkit'
import usersReducer from 'features/reducers/usuariosSlice'

export const store = configureStore({
  reducer: {
    usersStore: usersReducer
  },
})
