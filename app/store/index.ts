import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { rootReducer } from "./config/reducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// const middlewares = getDefaultMiddleware({
//   // https://github.com/reduxjs/redux-toolkit/issues/415
//   immutableCheck: false,
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// });
if (__DEV__) {
  // const createDebugger = require('redux-flipper').default
  // middlewares.push(createDebugger())
}
const persistConfig: any = {
  key: "root",
  storage: AsyncStorage,
  version: "2",
  //@ts-ignore
  migrate: (state) => {
    return Promise.resolve(state);
  },
  blacklist: [],
};

export type RootState = ReturnType<typeof rootReducer>;
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: (arg0: {
      // https://github.com/reduxjs/redux-toolkit/issues/415
      immutableCheck: boolean; serializableCheck: { ignoredActions: any[]; };
    }) => any) =>
    getDefaultMiddleware({
      // https://github.com/reduxjs/redux-toolkit/issues/415
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export * from "./main";


const persistor = persistStore(store);
export { store, persistor };
