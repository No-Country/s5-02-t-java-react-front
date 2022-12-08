import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { auth } from 'config/firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const URL = process.env.REACT_APP_URL
// <----------------- acciones que conectan a la base de datos ----------------->


export const registerWithCorreo = createAsyncThunk(
  'USERS/@REGISTER_CORREO',
  async (user) => {
    try {
      const sesion = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      )
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
      const msg = error.code
      return { msg }
    }
  }
)

export const loginWithCorreo = createAsyncThunk(
  'USERS/@LOGIN_CORREO',
  async (user) => {
    try {
      const sesion = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      )
      console.log("sesion", sesion?.user?.accessToken)

      const { data } = await axios({
        method: 'post',
        url: `${URL}/auth/login`,
        headers: {
          authorization: 'Bearer ' + sesion?.user?.accessToken
        }
      })

      if (data) {
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
      } else {
        await signOut(auth)
        console.log("userDeslogeado")
        return {
          use: {
            email: user.email
          },
          msg: `User no authenticated`
        }
      }

    } catch (error) {
      console.log(error)
      const msg = error.code
      return { msg }
    }
  }
)

export const loginWithGoogle = createAsyncThunk(
  'USERS/@LOGIN_GOOGLE',
  async () => {
    try {
      const googleProvider = new GoogleAuthProvider()
      const sesion = await signInWithPopup(auth, googleProvider)
      console.log("sesion", sesion?.user?.accessToken)
      const { data } = await axios({
        method: 'post',
        url: `${URL}/auth/sign-up`,
        headers: {
          authorization: 'Bearer ' + sesion?.user?.accessToken
        }
      })

      console.log(data)
      return {
        user: { token: sesion?.user?.accessToken, ...data },
        msg: `User logged in as ${data.email || data.name}`
      }
    } catch (error) {
      const msg = error.code
      return { msg }
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
