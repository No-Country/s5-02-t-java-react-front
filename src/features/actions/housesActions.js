import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const URL = process.env.REACT_APP_URL
// <----------------- acciones que conectan a la base de datos ----------------->


const getAllHouses = createAsyncThunk(
  "HOUSES/@GETALL",
  async (token) => {
    try {
      let { data } = axios.get(`${URL}/home_event`, {
        headers: { authorization: `Bearer ${token}` },
      })
      return data
    } catch (error) {
      return error.message
    }
  }
)

export {
  getAllHouses
}
