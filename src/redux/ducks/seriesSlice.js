import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    seriesList: [],
    selectedSeries: {},
  },
  reducers: {
    getSeries() {},
    setSeries(state, action) {
      const seriesList = action.payload;
      return { ...state, seriesList };
    },
    setSelectedSeries(state, action) {
      const selectedSeries = action.payload;
      return { ...state, selectedSeries };
    },
  },
});

export const { getSeries, setSeries, setSelectedSeries } = seriesSlice.actions;

export default seriesSlice.reducer;