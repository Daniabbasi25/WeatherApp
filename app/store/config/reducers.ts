import { combineReducers } from '@reduxjs/toolkit'
import { mainReducer } from '../main/main.slice'

 
export const rootReducer = combineReducers({
  Main: mainReducer,

});