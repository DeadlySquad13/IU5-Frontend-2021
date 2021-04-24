import { createSlice } from '@reduxjs/toolkit';

import fetchDataThunk from './SearchForm/handlers/fetchDataThunk.js';

const AUTHOR = 'DeadlySquad13';
export const slice = createSlice({
  name: 'search',
  initialState: {
    value: AUTHOR,
    users: [],
    status: 'idle',
    error: null,
    currentRequestId: undefined,
  },
  reducers: {
    input: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [fetchDataThunk.pending]: (state, action) => {
      if (state.status === 'idle') {
        state.status = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [fetchDataThunk.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.status = 'idle';
        state.users = [action.payload];
        state.currentRequestId = undefined;
      }
    },
    [fetchDataThunk.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.status === 'pending' && state.currentRequestId === requestId) {
        state.status = 'rejected';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});

export const { input, fetchData } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectInput = (state) => state.search.value;
// export const selectUsers = (state) => state.search.users;

export default slice.reducer;
