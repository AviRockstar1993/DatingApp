import {configureStore} from '@reduxjs/toolkit';
import {DatingSlice} from './slice';

const Store = configureStore({
  reducer: {
    Dating: DatingSlice.reducer,
  },
});

export default Store;
