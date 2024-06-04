import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {buildSubStateSelector} from '../config/subSelector';
import {MainState} from 'lib';
import extraReducers from './main.reducers'; 

const initialState: MainState = {
    isLoading: false,
    errorMessage: '',
    weather:undefined,
    
  };
  
  export type UserAppState = typeof initialState;
  

 
export const userSlice = createSlice({
  name: 'main',
  initialState,
  reducers: { 
setWeather:(state,action) => {
  state.weather=action.payload
},
  },
  extraReducers,
});

export const useUserSelector = buildSubStateSelector<UserAppState>(
    state => state.MainState,
  );
  
  export * from './main.actions';
  
  export const userActions = userSlice.actions;
  export const mainReducer = userSlice.reducer;
  export const { } = userSlice.actions; // Update the action name here
  export default mainReducer;