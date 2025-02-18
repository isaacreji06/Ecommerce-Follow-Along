import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  // name
  // initState
  // reducers
  name: 'Users Slice ',
  initialState: {
    email: '',
  },
  reducers: {
    setEmail(state, action) {
      console.log('State update', action);
      state.email = action.payload;
      // return state;
    },
  },
});

// recuder
export const { setEmail } = userSlice.actions;

export default userSlice.reducer;