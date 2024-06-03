// import {showMessage} from 'react-native-flash-message';

export const pending = (state: {isLoading: boolean}, {payload}: any) => {
  state.isLoading = true;
};

export const rejected = (
  state: {
    isLoading: boolean;
    errorMessage: any;
  },
  {payload}: any,
) => {
  state.isLoading = false;
  state.errorMessage = payload;
//   showMessage({
//     type: 'danger',
//     message: payload,
//   });
};

export const fulfilled = (
  state: {
    isLoading: boolean;
    errorMessage: string;
  },
  {payload}: any,
) => {
  state.isLoading = false;
  state.errorMessage = '';
};