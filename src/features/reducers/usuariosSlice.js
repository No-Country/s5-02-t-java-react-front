import { createSlice } from '@reduxjs/toolkit'

import {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getByNickname,
  updatePerfil,
  cerrarSession,
  loginWithCorreo,
  loginWithGoogle,
} from 'features/actions/usersActions'

export const initialUser = {
  token: null,
  name: null,
  email: null,
  photo: null
}

export const initialSesion = {
  user: initialUser,
  isOnline: false,
  msg: null
}
// estado inicial
const initialState = {
  users: [],
  user: {},
  loading: null,
  sesion: initialSesion
}

// reducers para usuarios
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.loading = !state.loading
    },
    sessionState: (state, { payload }) => {
      state.sesion = payload
    }

  },
  extraReducers: {
    // cerrar sesion
    [cerrarSession.pending]: (state) => { state.loading = true },
    [cerrarSession.fulfilled]: (state) => {
      state.loading = false
      state.sesion.user = initialState.sesion
    },
    [cerrarSession.rejected]: (state, { payload }) => {
      state.loading = true
      state.sesion.msg = payload.msg
    },
    // getSesionWhitCorreo
    [loginWithCorreo.pending]: (state) => { state.loading = true },
    [loginWithCorreo.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.sesion.user.email = payload?.email
      state.sesion.isOnline = true
      state.sesion.msg = payload.msg
    },
    [loginWithCorreo.rejected]: (state, { payload }) => {
      state.loading = true
      state.sesion.msg = payload.msg
    },
    // getSesionWhitGoogle
    [loginWithGoogle.pending]: (state) => { state.loading = true },
    [loginWithGoogle.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.sesion.user.token = payload?.token
      state.sesion.user.name = payload?.name
      state.sesion.user.email = payload?.email
      state.sesion.user.photo = payload?.image?.imageUrl
      state.sesion.isOnline = true
      state.sesion.msg = payload.msg
    },
    [loginWithGoogle.rejected]: (state, { payload }) => {
      state.loading = true
      state.sesion.msg = payload.msg
    },
    //getAll
    [getAll.pending]: (state) => {
      state.loading = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.users = payload.users
      state.count = payload.count
    },
    [getAll.rejected]: (state) => {
      state.loading = true
    },
    //getByNickname
    [getByNickname.pending]: (state) => {
      state.loading = true
    },
    [getByNickname.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.usuario = payload?.users[0]
    },
    [getByNickname.rejected]: (state, { type }) => {
      state.loading = true
    },
    //getById
    [getById.pending]: (state) => {
      state.loading = true
    },
    [getById.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.usuario = payload.usuario
    },
    [getById.rejected]: (state) => {
      state.loading = true
    },
    //create
    [create.pending]: (state) => {
      state.loading = true
    },
    [create.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.users = [...state.users, payload.usuario]
      state.usuario = payload.usuario
      state.total = state.total + 1
    },
    [create.rejected]: (state) => {
      state.loading = true
    },
    //update
    [update.pending]: (state) => {
      state.loading = true
    },
    [update.fulfilled]: (state, { payload }) => {
      const index = state.users.findIndex(
        (usuario) => usuario.id === payload.usuario.id
      )

      state.users[index] = payload.usuario

      state.loading = false
    },
    [update.rejected]: (state) => {
      state.loading = true
    },
    //update perfil
    [updatePerfil.pending]: (state) => {
      state.loading = true
    },
    [updatePerfil.fulfilled]: (state, { payload }) => {
      state.usuario = payload.usuario
      state.loading = false
    },
    [updatePerfil.rejected]: (state) => {
      state.loading = true
    },
    //deleteById
    [deleteById.pending]: (state) => {
      state.loading = true
    },
    [deleteById.fulfilled]: (state, { payload }) => {
      state.users = [
        ...state.users.filter(
          (usuario) => usuario.id !== payload.usuario.id
        ),
      ]
      state.total = state.total - 1
      state.loading = false
    },
    [deleteById.rejected]: (state) => {
      state.loading = true
    },
  },
})
export const { cambiarCargando, sessionState } = usersSlice.actions
export default usersSlice.reducer
