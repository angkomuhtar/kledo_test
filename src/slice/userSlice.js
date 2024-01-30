import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isLoggedIn: false,
  },
  reducers: {},
});

// export const { todoAdded, todoToggled } = userSlice.actions;
export default userSlice.reducer;
