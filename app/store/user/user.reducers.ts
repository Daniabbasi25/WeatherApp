import {User, UserState} from '@model';

import {fulfilled, pending, rejected} from '../utils';

import {getUserInfo, loginUser, signUpUser, updateUser, updateUserEmail} from './user.actions';

// Get User Info on every start
const GET_USET_INFO = [
    {action: getUserInfo.pending, callback: pending},
    {action: getUserInfo.rejected, callback: rejected},
    {
      action: getUserInfo.fulfilled,
      callback: (state: UserState, action: {payload: any}) => {
        // alter state
        const {user} = action.payload;
        state.user = user;
        fulfilled(state, action);
      },
    },
  ];
const LOGIN_USER = [
    {action: loginUser.pending, callback: pending},
    {action: loginUser.rejected, callback: rejected},
    {
      action: loginUser.fulfilled,
      callback: (state: UserState, action: {payload: any}) => {
        // alter state
        console.log(action.payload)
        const {user} = action.payload;
        state.user = user;
        state.isLogin = true;
        fulfilled(state, action);
      },
    },
  ];
const SIGNUP_USER = [
    {action: signUpUser.pending, callback: pending},
    {action: signUpUser.rejected, callback: rejected},
    {
      action: signUpUser.fulfilled,
      callback: (state: UserState, action: {payload: any}) => {
        // alter state
        console.log(action.payload)
        const {user} = action.payload;
        state.user = user;
        state.isLogin = true;
        fulfilled(state, action);
      },
    },
  ];
const UPDATE_USER = [
    {action: updateUser.pending, callback: pending},
    {action: updateUser.rejected, callback: rejected},
    {
      action: updateUser.fulfilled,
      callback: (state: UserState, action: {payload: any}) => {
        // alter state
      
        const {user} = action.payload;
        state.user.contact = user.contact;
     
        state.user.entreprise = user.entreprise;
        state.user.firstName = user.firstName;
        state.user.function = user.function;
        state.user.lastName = user.lastName;
        state.user.profile = user.profile;
        fulfilled(state, action);
      },
    },
  ];
const UPDATE_USER_EMAIL = [
    {action: updateUserEmail.pending, callback: pending},
    {action: updateUserEmail.rejected, callback: rejected},
    {
      action: updateUserEmail.fulfilled,
      callback: (state: UserState, action: {payload: any}) => {
        // alter state
        // console.log(action.payload)
        const {user} = action.payload;
        state.user.email=user.email;
        
        fulfilled(state, action);
      },
    },
  ];


  // @ts-ignore
  const extraReducers = ({addCase}) => {
    const addToReducers = (arr: {action: any; callback: any}[]) => {
      arr.forEach(({action, callback}) => addCase(action, callback));
    };
    addToReducers(GET_USET_INFO);
    addToReducers(LOGIN_USER);
    addToReducers(SIGNUP_USER);
    addToReducers(UPDATE_USER);
    addToReducers(UPDATE_USER_EMAIL);
   
  };
  export default extraReducers;