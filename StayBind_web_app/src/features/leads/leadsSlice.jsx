import { createSlice } from '@reduxjs/toolkit';
import { submitLead } from './leadsApi'; // Ensure this import path is correct

const leadsSlice = createSlice({
  name: 'leads',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLead.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitLead.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(submitLead.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetStatus } = leadsSlice.actions;

export default leadsSlice.reducer;
