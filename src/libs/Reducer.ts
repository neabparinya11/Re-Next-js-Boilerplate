import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  store: [],
};

const storeSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {},
});

export default storeSlice.reducer;
