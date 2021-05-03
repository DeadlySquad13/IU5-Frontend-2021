import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store/store';
import fetchDataThunk from './SearchForm/_handlers/fetchDataThunk';

const AUTHOR:  string = 'DeadlySquad13';

interface SearchState {
  value: string,
  users: any[],
  status: 'idle' | 'pending' | 'rejected',
  error: null | any,
  currentRequestId: undefined | string
}

const SearchInitialState: SearchState = {
  value: AUTHOR,
  users: [],
  status: 'idle',
  error: null,
  currentRequestId: undefined
}

export const slice = createSlice({
  name: 'search',
  initialState: SearchInitialState,
  reducers: {
    input: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state, action) => {
        state.status = 'pending';
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.currentRequestId === requestId) {
          state.status = 'idle';
          state.users = [action.payload];
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.currentRequestId === requestId) {
          state.status = 'rejected';
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const { input } = slice.actions;

export const selectInput = (state: RootState) => state.search.value;

export default slice.reducer;
