import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchDataThunk = createAsyncThunk(
  'search/fetchDataThunk',
  async ({ login, generateUrl }, thunkAPI) => {
    const TOKEN = process.env.REACT_APP_API_KEY;
    const searchResult = await fetch(generateUrl(login), {
      method: 'GET',
      headers: {
        Authorization: `Token ${TOKEN}`,
      },
    });

    if (!searchResult.ok) {
      throw new Error(`HTTP error! status: ${searchResult.status}`);
    } else {
      const searchResultData = await searchResult.json();
      console.log(searchResultData);
      return searchResultData;
    }
  }
);

export default fetchDataThunk;
