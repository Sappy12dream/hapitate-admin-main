import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: { login: false },
  reducers: {
    update: (state, action) => {
      state = { ...action.payload, login: false };
      return state;
    },
    signOut: (state) => {
      return { login: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { update, signOut } = authSlice.actions;

export default authSlice.reducer;
