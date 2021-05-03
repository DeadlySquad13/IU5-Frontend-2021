import { createAsyncThunk } from '@reduxjs/toolkit';
let headers = new Headers();

type fetchRequestData = Readonly<{
  login: string,
  generateUrl: (login: string) => string
}>

headers.append('Authorization',`Token ${process.env.REACT_APP_API_KEY}`);
const fetchRequestInitParameters: RequestInit = {
  headers: headers,
  method: 'GET',
}

const fetchDataThunk = createAsyncThunk(
  'search/fetchDataThunk',
  async ({ login, generateUrl }: fetchRequestData, thunkAPI) => {
    const searchResult = await fetch(generateUrl(login),
    fetchRequestInitParameters);

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
