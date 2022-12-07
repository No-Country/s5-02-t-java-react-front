import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { auth } from 'config/firebase'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const URL = process.env.REACT_APP_URL
// <----------------- acciones que conectan a la base de datos ----------------->

export const loginWhitCorreo = createAsyncThunk(
  'USERS/@LOGIN_CORREO',
  async (user) => {
    try {
      const sesion = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      )
      return {
        user: {
          token: sesion?.user?.accessToken,
          name: sesion?.user?.displayName,
          email: sesion?.user?.email,
          photo: sesion?.user?.photoURL
        },
        msg: `User logged in as ${sesion.user.email}`
      }
    } catch (error) {
      const msg = error.message
      return { msg }
    }
  }
)
export const loginWhitGoogle = createAsyncThunk(
  'USERS/@LOGIN_GOOGLE',
  async () => {
    try {
      const googleProvider = new GoogleAuthProvider()
      const sesion = await signInWithPopup(auth, googleProvider)

      const { data } = await axios({
        method: 'post',
        url: `${URL}/auth/sign-up`,
        headers: {
          authorization: 'Bearer ' + sesion?.user?.accessToken
        }
      })

      return {
        user: data,
        msg: `User logged in as ${data.email || data.name}`
      }
    } catch (error) {
      return error.message
    }
  }
)

export const cerrarSession = createAsyncThunk(
  'USERS/@CLOSE_SESION',
  async () => {
    try {
      // const googleProvider = new GoogleAuthProvider()
      // const sesion = await signInWithPopup(auth, googleProvider)
      await signOut(auth)
      console.log("userDeslogeado")
      return {
        msg: `User logout was successful`
      }
    } catch (error) {
      return { msg: "error" }
    }
  }
)

export const getAll = createAsyncThunk(
  'USERS/@GETALL',
  async (query = '') => {
    try {
      const { data } = await axios.get(`${URL} /usuarios${query}`)
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getByNickname = createAsyncThunk(
  'USERS/@GETBYNICKNAME',
  async (user) => {
    try {
      const { data } = await axios.get(
        `${URL}/usuarios?nickname=${user.nickname}`
      )
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getAllByName = createAsyncThunk(
  'USERS/@GETALL',
  async ({ payload }) => {
    try {
      const { data } = await axios.get(`${URL}/usuarios`, {
        payload,
      })
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getById = createAsyncThunk('USERS/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`${URL}/usuarios/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('USERS/@CREATE', async (body) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: `${URL}/usuarios`,
      headers: { authorization: `Bearer ${body.token}` },
      data: body.user,
    })
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('USERS/@UPDATE', async (usuario) => {
  try {
    const { data } = await axios.put(
      `${URL}/usuarios/${usuario.id}`,
      usuario.datos
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const updatePerfil = createAsyncThunk(
  'USERS/@UPDATE',
  async (usuario) => {
    try {
      const { data } = await axios.put(
        `${URL}/usuarios/${usuario.id}`,
        usuario.datos
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const deleteById = createAsyncThunk(
  'USERS/@DELETEBYID',
  async (id) => {
    try {
      const { data } = await axios.delete(`${URL}/usuarios/${id}`)
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)
