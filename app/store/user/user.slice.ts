import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {buildSubStateSelector} from '../config/subSelector';
import {User, UserState} from '@model';
import extraReducers from './user.reducers'; 

const initialState: UserState = {
    isLoading: false,
    errorMessage: '',
    user: {} as User,
    isLogin: false,
    
  };
  
  export type UserAppState = typeof initialState;
  

 
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { 
    logOut:(state)=>{
      state.isLogin=false
    }
  },
  extraReducers,
});

export const useUserSelector = buildSubStateSelector<UserAppState>(
    state => state.user,
  );
  
  export * from './user.actions';
  
  export const userActions = userSlice.actions;
  export const userReducers = userSlice.reducer;
  export const { logOut} = userSlice.actions; // Update the action name here
  export default userReducers;