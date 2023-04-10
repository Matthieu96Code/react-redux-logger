import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = 'https://api.spacexdata.com/v3/missions'

export const getMissions = createAsyncThunk ('missions/getMission', async (thunkAPI) => {
  try {
    const resp = await axios.get(apiUrl);
    return resp.data

  } catch (error) {
    return thunkAPI.rejectWithValue('Thunk Error')
  }
})