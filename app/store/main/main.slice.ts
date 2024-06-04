import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {buildSubStateSelector} from '../config/subSelector';
import {MainState} from 'lib';
import extraReducers from './main.reducers'; 

const initialState: MainState = {
    isLoading: false,
    errorMessage: '',
    weather:undefined,
    theme:'Light',
    unit:'C'
    
  };
  
  export type UserAppState = typeof initialState;
  

 
export const userSlice = createSlice({
  name: 'main',
  initialState,
  reducers: { 
setWeatherStates:(state,action) => {
  state.weather=action.payload
  if(action.payload?.current.temp_c<15){
    state.theme='Dark'
  }
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
  export const {setWeatherStates } = userSlice.actions; // Update the action name here
  export default mainReducer;