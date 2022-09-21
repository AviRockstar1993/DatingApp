import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  confirm: {},
};

export const DatingSlice = createSlice({
  name: 'Dating',
  initialState: initialState,
  reducers: {
    SetConfrimationOtp(state, action) {
      state.confirm = action.payload;
    },
  },
});

export const DatingAction = DatingSlice.actions;
