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

export {
  getAllHouses
}
