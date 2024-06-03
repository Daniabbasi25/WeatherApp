import { combineReducers } from '@reduxjs/toolkit'
import { userReducers } from '../user/user.slice'

 
export const rootReducer = combineReducers({
  User: userReducers,

});