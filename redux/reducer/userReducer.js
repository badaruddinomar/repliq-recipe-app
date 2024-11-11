import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  access_token: null,
  user: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserToStore: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    removeUserFromStore: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const { addUserToStore, removeUserFromStore } = userReducer.actions;
export default userReducer.reducer;
