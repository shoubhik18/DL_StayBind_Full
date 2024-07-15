import { configureStore } from '@reduxjs/toolkit';
import leadsReducer from '../features/leads/leadsSlice';

const store = configureStore({
  reducer: {
    leads: leadsReducer,
  },
});

export default store;
