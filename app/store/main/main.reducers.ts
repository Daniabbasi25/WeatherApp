import { MainState } from 'lib';
import {fulfilled, pending, rejected} from '../utils';

import {getUserInfo} from './main.actions';

// Get User Info on every start
const GET_USET_INFO = [
    {action: getUserInfo.pending, callback: pending},
    {action: getUserInfo.rejected, callback: rejected},
    {
      action: getUserInfo.fulfilled,
      callback: (state: MainState, action: {payload: any}) => {
        // alter state
        const {user} = action.payload;

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
 
   
  };
  export default extraReducers;