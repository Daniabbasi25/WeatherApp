import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
 

export const getUserInfo = createAsyncThunk(
  "getUserInfo",
  async (_, { rejectWithValue }) => {
    try {
      //axios request
      return {
        user: {},
      };
    } catch (error: any) {
      const message = error?.data ?? "Failed to fetch user info!";

      return rejectWithValue(message);
    }
  }
);
 