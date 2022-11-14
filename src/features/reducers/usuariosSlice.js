import { createSlice } from '@reduxjs/toolkit'

import {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getByNickname,
  updatePerfil,
} from 'features/actions/usuarios'

// estado inicial
const initialState = {
  usuarios: [],
  usuario: {},
  cargando: null,
}

// reducers para usuarios
const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando
    },
  },
  extraReducers: {
    //getAll
    [getAll.pending]: (state) => {
      state.cargando = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.usuarios = payload.usuarios
      state.count = payload.count
    },
    [getAll.rejected]: (state) => {
      state.cargando = true
    },
    //getByNickname
    [getByNickname.pending]: (state) => {
      state.cargando = true
    },
    [getByNickname.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.usuario = payload?.usuarios[0]
    },
    [getByNickname.rejected]: (state, { type }) => {
      state.cargando = true
    },
    //getById
    [getById.pending]: (state) => {
      state.cargando = true
    },
    [getById.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.usuario = payload.usuario
    },
    [getById.rejected]: (state) => {
      state.cargando = true
    },
    //create
    [create.pending]: (state) => {
      state.cargando = true
    },
    [create.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.usuarios = [...state.usuarios, payload.usuario]
      state.usuario = payload.usuario
      state.total = state.total + 1
    },
    [create.rejected]: (state) => {
      state.cargando = true
    },
    //update
    [update.pending]: (state) => {
      state.cargando = true
    },
    [update.fulfilled]: (state, { payload }) => {
      const index = state.usuarios.findIndex(
        (usuario) => usuario.id === payload.usuario.id
      )

      state.usuarios[index] = payload.usuario

      state.cargando = false
    },
    [update.rejected]: (state) => {
      state.cargando = true
    },
    //update perfil
    [updatePerfil.pending]: (state) => {
      state.cargando = true
    },
    [updatePerfil.fulfilled]: (state, { payload }) => {
      state.usuario = payload.usuario
      state.cargando = false
    },
    [updatePerfil.rejected]: (state) => {
      state.cargando = true
    },
    //deleteById
    [deleteById.pending]: (state) => {
      state.cargando = true
    },
    [deleteById.fulfilled]: (state, { payload }) => {
      state.usuarios = [
        ...state.usuarios.filter(
          (usuario) => usuario.id !== payload.usuario.id
        ),
      ]
      state.total = state.total - 1
      state.cargando = false
    },
    [deleteById.rejected]: (state) => {
      state.cargando = true
    },
  },
})
export const { cambiarCargando } = usuariosSlice.actions
export default usuariosSlice.reducer
