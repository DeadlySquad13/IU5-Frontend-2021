import { createSlice } from '@reduxjs/toolkit';

import fetchDataThunk from './SearchForm/_handlers/fetchDataThunk.js';

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
      state.status = 'pending';
      state.currentRequestId = action.meta.requestId;
    },
    [fetchDataThunk.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.currentRequestId === requestId) {
        state.status = 'idle';
        state.users = [action.payload];
        state.currentRequestId = undefined;
      }
    },
    [fetchDataThunk.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.currentRequestId === requestId) {
        state.status = 'rejected';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});

export const { input, fetchData } = slice.actions;

export const selectInput = (state) => state.search.value;

export default slice.reducer;
