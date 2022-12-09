import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const URL = process.env.REACT_APP_URL
// <----------------- acciones que conectan a la base de datos ----------------->

const getAllHouses = createAsyncThunk(
  "HOUSES/@GETALL",
  async ({ token, query }) => {
    try {
      const { data } = await axios.get(`${URL}/home_event?${query}`, {
        headers: {
          authorization: 'Bearer ' + token
        }
      })

      console.log(data)
      return data
    } catch (error) {
      return error.message
    }
  }
)

const getHousesPrediction = createAsyncThunk(
  "HOUSES/@GETALLPREDICTIONS",
  async ({ token }) => {
    try {
      const { data } = await axios.get(`${URL}/home_event`, {
        headers: {
          authorization: 'Bearer ' + token
        }
      })

      console.log(data)
      return data
    } catch (error) {
      return error.message
    }
  }
)

const getHouseById = createAsyncThunk(
  "HOUSES/@GETBYID",
  async ({ token, id }) => {
    try {
      const { data } = await axios.get(`${URL}/home_event/find/${id}`, {
        headers: {
          authorization: 'Bearer ' + token
        }
      })
      console.log(data)
      return data
    } catch (error) {
      return error.message
    }
  }
)

const getHouseByName = createAsyncThunk(
  "HOUSES/@GETBYNAME",
  async ({ token, name }) => {
    try {
      const { data } = await axios.get(`${URL}/home_event/name?name=${name}`, {
        headers: {
          authorization: 'Bearer ' + token
        }
      })
      console.log(data)
      return data
    } catch (error) {
      return error.message
    }
  }
)

export {
  getAllHouses,
  getHouseById,
  getHousesPrediction,
  getHouseByName
}
