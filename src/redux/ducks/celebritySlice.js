import { createSlice } from "@reduxjs/toolkit";

const celebritySlice = createSlice({
  name: "celebrity",
  initialState: {
    celebrity:{}
  },
  reducers: {
    getCelebrity(){},
    setCelebrity(state, action){
        const celebrity = action.payload;
      return { ...state, celebrity };
    }
  },
});

export const {getCelebrity, setCelebrity} = celebritySlice.actions;

export default celebritySlice.reducer;