import { configureStore } from '@reduxjs/toolkit';

export const createStore = () => {
  return configureStore({
    reducer: {},
  });
};

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType['getState']>;
export type StoreDispatch = StoreType['dispatch'];
