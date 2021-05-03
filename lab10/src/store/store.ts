import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/_features/PageButton/counterSlice';
import searchReducer from '../components/searchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;